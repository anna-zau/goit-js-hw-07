import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery"); // link to Gallery

//  creating a markup
const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`,
  ""
);

function render(markup) {
  gallery.insertAdjacentHTML("beforeend", markup);
}

console.log(render(markup)); // call render function to add markup into div Gallery

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img  src="${evt.target.dataset.source}" width="1280" height="auto"/>`,
    {
      onShow: () => window.addEventListener("keydown", onEsc),
      onClose: () => window.removeEventListener("keydown", onEsc),
    }
  );

  function onEsc(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
