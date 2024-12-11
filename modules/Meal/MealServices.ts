'use server';

import MealModel from './MealModel';
import slugify from 'slugify';
import xss from 'xss';
import { redirect } from 'next/navigation';
import IMeal from '@/interface/IMeal';
import { revalidatePath } from 'next/cache';
import { S3 } from '@aws-sdk/client-s3';
import connectToDatabase from '@/database/database';

const s3 = new S3({
  region: 'eu-north-1',
  // credentials: {
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // },
});

// GET ALL PRODUCTS ----------------------------------------------------------
export async function getAllMeal() {
  //await new Promise(resolve => setTimeout((resolve)=> {}, 5000))

  try {
    // Connecting to a database;
    await connectToDatabase();

    // Search query;
    return await MealModel.find();
  } catch (error) {
    console.log('An error occurred while trying to retrieve data from the database.', error);
    throw new Error('An error occurred while getting data, please try again in a few minutes.');
  }
}

// GET ONE PRODUCT --------------------------------------------
export async function getOneMeal(slug: string) {
  try {
    // Connecting to a database;
    await connectToDatabase();
    // Search query;
    return await MealModel.findOne({ slug });
  } catch (error) {
    console.log('An error occurred while trying to retrieve data from the database.', error);
    throw new Error('An error occurred while getting data, please try again in a few minutes.');
  }
}

// ADD ONE MEAL TO DATA BASE -------------------------------------------
export async function addOneMealToDataBase(formData: any) {
  const allMeals = await getAllMeal();

  if (allMeals.length > 20) {
    throw Error('The limit of additions set by ILLIA has been exceeded. Limit 20 pages');
  }

  //================================================================
  //================================================================
  //================================================================

  // Getting data from a form;
  const newMealData = {
    creator: xss(formData.get('creator')),
    creator_email: xss(formData.get('email')),
    title: xss(formData.get('title')),
    summary: xss(formData.get('summary')),
    instructions: xss(formData.get('instructions')),
    imageObject: formData.get('img'),
  };

  // Checking for the existence of properties;
  for (const [key, value] of Object.entries(newMealData)) {
    if (!value) {
      throw new Error(`${key} property is missing`);
    }
  }

  //================================================================
  //================================================================
  //================================================================

  // Adding an image to AWS S3;

  // Creating a slug;
  const slug = slugify(newMealData.title, { lower: true });

  // Getting the extension of the received image;
  const extension = newMealData.imageObject.name.split('.').pop();

  // Create our own file name, no need to use the given file name;;
  const fileName = `${Date.now()}-${slug}.${extension}`;

  // Converting the received file into a buffer array;;
  const bufferedImage = await newMealData.imageObject.arrayBuffer();

  // This action uploads files to an AWS bucket;
  await s3
    .putObject({
      Bucket: 'illiabulgakovawsbucket',
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: newMealData.imageObject.type,
    })
    .then(result => {
      console.log('File uploaded successfully to AWS S3:', result);
    })
    .catch((error: any) => {
      console.error('Error uploading file to AWS S3:', error);
      throw new Error('There was an error saving the file. Please try again in a few minutes.');
    });

  // =============================================================
  // =============================================================
  // =============================================================

  //Connecting to the database MongoDB;
  await connectToDatabase();

  // Creating an object to be written to the database;
  const newMeal = new MealModel({
    creator: newMealData.creator,
    creator_email: newMealData.creator_email,
    slug,
    title: newMealData.title,
    summary: newMealData.summary,
    instructions: newMealData.instructions,
    image: fileName,
  });

  // This action writes data to the database;
  await newMeal
    .save()
    .then((result: IMeal) => {
      // This action receives a successful response if the data was written to the database;
      console.log('Data successfully written to the database;');
    })
    .catch((error: any) => {
      // Actions if an error occurs while writing data in database;
      console.log('Error while writing data to the database', error);
      throw new Error('An error occurred while writing data, please try again in a few minutes.');
    });

  // =============================================================
  // =============================================================
  // =============================================================

  // Update the status of the '/meals' page;
  revalidatePath('/meals');
  // Redirect to '/meals' page;
  redirect('/meals');
}
