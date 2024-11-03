import { errorMessage, successMessage } from './js/common.js';
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchFieldSelector = document.querySelector('.search-field');
const loaderContainer = document.querySelector('.loader-container');
const gallery = document.querySelector('.gallery');

function showLoader() {
  loaderContainer.style.display = 'flex';
}

function hideLoader() {
  loaderContainer.style.display = 'none';
}

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const query = searchFieldSelector.value.trim();
  if (query.length === 0) {
    return;
  }

  showLoader();
  fetchImages(query)
    .then(images => {
      renderGallery(gallery, images);
      hideLoader();
    })
    .catch((error) => {
      errorMessage(error.message);
      hideLoader();
      gallery.innerHTML = '';
    });
});