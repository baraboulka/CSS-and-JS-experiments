import { API_KEY } from "./api-key.js";

const gridGallery = document.querySelector(".gallery");
const API = `https://pixabay.com/api/?key=${API_KEY}&q=city+bicycle&image_type=photo`;

const createImage = (photo) => {
  const imageBox = document.createElement("div");
  imageBox.className = "image-container";
  const image = document.createElement("img");
  image.setAttribute("src", photo.webformatURL);
  image.setAttribute("alt", photo.tags);
  imageBox.appendChild(image);
  return imageBox;
};

window.addEventListener("load", async () => {
  const response = await fetch(API);
  const jsonResponse = await response.json();
  const photos = jsonResponse.hits;
  photos.map((photo) => {
    const gridImage = createImage(photo);
    gridGallery.appendChild(gridImage);
  });
});
