import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const links = [];

galleryItems.forEach(({ preview, original, description }, index) => {
  const link = document.createElement("a");
  link.href = original;
  link.classList.add("gallery__link");
  links.push(link);
  
  const img = document.createElement("img");
  img.src = preview;
  img.setAttribute("data-source", original);
  img.setAttribute("alt", description);
  img.setAttribute("title", description);

  img.classList.add("gallery__image");
  link.appendChild(img);

  const item = document.createElement("div");
  item.classList.add("gallery__item");
  item.appendChild(link);

  gallery.appendChild(item);
});

const lightbox = new SimpleLightbox(links, {
  captionDelay: 250,
  nav: true
});

