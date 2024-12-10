'use client';

// Видео по созданию данного компонента;
// https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/41159758#overview

import { ChangeEvent, FC, useRef, useState } from 'react';
import classes from './ImagePickerSharePage.module.css';
import Image from 'next/image';

// INTERFACE ------------------------------------
interface IProps {
  label: string;
  name: string;
}

// COMPONENT ------------------------------------
const ImagePickerSharePage: FC<IProps> = ({ label, name }) => {
  // useRef;
  const imageInput = useRef<HTMLInputElement>(null);

  // useState;
  const [pickImage, setPickImage] = useState<any>();

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      setPickImage(null);
      return;
    }

    const file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  // RENDERING COMPONENT ------------------------
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picked yet</p>}

          {pickImage && <Image src={pickImage} alt="Your image should be added here" fill />}
        </div>

        <input className={classes.input} type="file" id={name} name={name} accept="image/png, image/jpeg" ref={imageInput} onChange={handleImageChange} required />

        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePickerSharePage;
