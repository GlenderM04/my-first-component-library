// src/ImageGrid.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { fetchImages } from "./services/images.dao";

// Estilo del contenedor de la cuadrícula
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-height: 600px; // Ajusta según lo necesario
  overflow-y: auto; // Permite el desplazamiento vertical
  padding: 10px;
`;

// Estilo de cada imagen
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagesData = await fetchImages();
      setImages(imagesData);
    };

    loadImages();
  }, []);

  return (
    <GridContainer>
      {images.map((image) => (
        <ImageWrapper key={image.id}>
          <Image
            src={image.url}
            alt={`Imagen ${image.id}`}
            layout="responsive"
            width={200}
            height={300}
            objectFit="cover"
          />
        </ImageWrapper>
      ))}
    </GridContainer>
  );
};

export default ImageGrid;
