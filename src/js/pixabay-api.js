import { renderGallery } from './render-functions.js'; // Імпорт функції renderGallery

const searchForm = document.querySelector('.form');
const inputElement = document.querySelector('.search-input');
const loader = document.querySelector('.loader');

const API_KEY = '42710952-cb07850fe6c5f6774b64d780f';
const baseURL = 'https://pixabay.com/api/';

async function fetchImages(searchQuery) {
  const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}
hideLoader();

searchForm.addEventListener('submit', submitHandle);

async function submitHandle(event) {
  event.preventDefault();
  showLoader();
  const searchTerm = inputElement.value.trim();

  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topCenter',
    });

    return;
  }
  showLoader();
  try {
    const images = await fetchImages(searchTerm);
    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
    } else {
      renderGallery(images);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }
}
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
