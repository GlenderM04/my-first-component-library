// src/images.dao.js

export const fetchImages = async () => {
  const imagePromises = Array.from({ length: 10 }).map((_, index) =>
    fetch(`https://picsum.photos/id/${index + 1}/200/300`).then((response) => ({
      id: index + 1,
      url: response.url,
    }))
  );

  return Promise.all(imagePromises);
};
