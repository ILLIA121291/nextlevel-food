'use server';

import MealModel from './MealModel';
import slugify from 'slugify';
import xss from 'xss';
import { redirect } from 'next/navigation';
import connectDB from '@/database/database';
import IMeal from '@/interface/IMeal';
import { revalidatePath } from 'next/cache';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'eu-north-1',
  // credentials: {
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // },
});

// GET ALL PRODUCTS ----------------------------------------------------------
export async function getAllMeal() {
  try {
    await connectDB();

    return await MealModel.find();
  } catch (error) {
    console.log(error);
  }

  return [];
}

// GET ONE PRODUCT --------------------------------------------
export async function getOneMeal(slug: string) {
  try {
    return await MealModel.findOne({ slug });
  } catch (error) {
    console.log(error);
  }

  return {};
}

// ADD ONE MEAL TO DATA BASE -------------------------------------------
export async function addOneMealToDataBase(formData: any) {
  // Получение объекта картинки из fromData;
  const imageObject = formData.get('img');

  // Создание слага для картинки;
  const slug = slugify(formData.get('title'), { lower: true });

  // Получение расширеня полученной картинки;
  const extension = imageObject.name.split('.').pop();

  // Создание нашего собственного имени файла, не нужно использовать полученное имя фаила;
  const fileName = `${slug}.${extension}`;

  // Конвертация полученного фаила в массив буфера;
  const bufferedImage = await imageObject.arrayBuffer();

  // Данное действие загружает файлы на AWS buket;
  await s3
    .putObject({
      Bucket: 'illiabulgakovawsbucket',
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: imageObject.type,
    })
    .then(result => {})
    .catch((error: any) => {
      throw new Error('There was an error saving the file. Please try again in a few minutes.');
    });

  //Connecting to the database
  await connectDB();

  // Getting data from the form;
  const newMeal = new MealModel({
    creator: formData.get('creator'),
    creator_email: formData.get('email'),
    slug,
    title: formData.get('title'),
    summary: xss(formData.get('summary')),
    instructions: xss(formData.get('instructions')),
    image: fileName,
  });

  // This action writes data to the database;
  await newMeal
    .save()
    // This action gets a response from the database;
    .then((result: IMeal) => {})
    // Actions if an error occurs while writing data;
    .catch((error: any) => {
      throw new Error('An error occurred while writing data, please try again in a few minutes.');
    });

  // Update the status of the '/meals' page;
  revalidatePath('/meals');
  // Redirect to '/meals' page;
  redirect('/meals');
}
