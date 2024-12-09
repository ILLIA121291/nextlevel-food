'use server';

import MealModel from './MealModel';
import slugify from 'slugify';
import xss from 'xss';
import { redirect } from 'next/navigation';
import connectDB from '@/database/database';
import IMeal from '@/interface/IMeal';
import { revalidatePath } from 'next/cache';
import { S3 } from '@aws-sdk/client-s3';
import connectToDatabase from '@/database/mongoose';

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
    // await connectDB();

    await connectToDatabase()

    return await MealModel.find();
  } catch (error) {
    console.log(error);
  }

  return [];
}

// GET ONE PRODUCT --------------------------------------------
export async function getOneMeal(slug: string) {
  await connectToDatabase()
  try {
    return await MealModel.findOne({ slug });
  } catch (error) {
    console.log(error);
  }

  return {};
}

// ADD ONE MEAL TO DATA BASE -------------------------------------------
export async function addOneMealToDataBase(formData: any) {
  console.log('addOneMealToDataBase - Подключение к базе данных....')
  await connectToDatabase()
  console.log('addOneMealToDataBase - Успешное подключение к базе данных!!!')

  // Получение объекта картинки из fromData;
  const imageObject = formData.get('img');
  console.log('Обьект с изображением есть!')

  // Создание слага для картинки;
  const slug = slugify(formData.get('title'), { lower: true });
  console.log('Slug есть!')
  // Получение расширеня полученной картинки;
  const extension = imageObject.name.split('.').pop();
  console.log('extension есть!')
  // Создание нашего собственного имени файла, не нужно использовать полученное имя фаила;
  const fileName = `${slug}.${extension}`;
  console.log('fileName есть!')
  // Конвертация полученного фаила в массив буфера;
  const bufferedImage = await imageObject.arrayBuffer();
  console.log('bufferedImage есть!')
  // Данное действие загружает файлы на AWS buket;

console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY ? 'Скрыт' : 'Отсутствует');
console.log('AWS_REGION:', process.env.AWS_REGION);

  await s3
    .putObject({
      Bucket: 'illiabulgakovawsbucket',
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: imageObject.type,
    })
    .then(result => {
      console.log('Файл успешно загружен:', result);
    })
    .catch((error: any) => {
      console.error('Ошибка загрузки файла в S3:', error);
      throw new Error('There was an error saving the file. Please try again in a few minutes.');
    });

  //Connecting to the database

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

  console.log('newMeal есть!')
  // This action writes data to the database;
  await newMeal
    .save()
    // This action gets a response from the database;
    .then((result: IMeal) => {
      console.log('Данные успешно записаны:', result);
    })
    // Actions if an error occurs while writing data;
    .catch((error: any) => {
      console.error('Ошибка записи в базу данных:', error);
      throw new Error('An error occurred while writing data, please try again in a few minutes.');
    });

  // Update the status of the '/meals' page;
  revalidatePath('/meals');
  // Redirect to '/meals' page;
  redirect('/meals');
}
