import React, { ChangeEvent, useState } from "react";
import "./ElementAssets.css";


const ImageUploader: React.FC = () => {
  const [imageProperties, setImageProperties] = useState({
    name: "",
    size: 0,
    type: "",
    width: 0,
    height: 0,
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const { name, size, type } = file;

      // Create a FileReader to get image dimensions
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.onload = () => {
          const { width, height } = image;
          setImageProperties({ name, size, type, width, height });
          console.log("Image properties ", name," " ,size," " ,type," " ,width," " ,height);
        };
        image.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <input type="file" onChange={handleImageChange} />
      <div>
        <p>Name: {imageProperties.name}</p>
        <p>Size: {imageProperties.size} bytes</p>
        <p>Type: {imageProperties.type}</p>
        <p>Width: {imageProperties.width}</p>
        <p>Height: {imageProperties.height}</p>
      </div>
    </div>
  );
};

export default ImageUploader;
