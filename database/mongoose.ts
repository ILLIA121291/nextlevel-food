import mongoose from 'mongoose';

let isConnected: any = false; // Глобальная переменная для отслеживания соединения

const connectToDatabase = async () => {
  
  if (isConnected) {
    console.log("Используется существующее соединение");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);

    isConnected = db.connections[0].readyState;
    console.log("Подключение к MongoDB успешно");
  } catch (error) {
    console.error("Ошибка подключения к MongoDB:", error);
    throw new Error("Не удалось подключиться к базе данных");
  }
};

export default connectToDatabase;