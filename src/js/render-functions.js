import SimpleLightbox from 'simplelightbox';

const galleryElement = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.refresh();

export function renderGallery(images) {
  galleryElement.innerHTML = '';

  images.forEach(image => {
    const cardHTML = `
      <li class="card">
        <a href="${image.largeImageURL}" class="link">
          <img src="${image.webformatURL}" alt="${image.tags}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${image.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${image.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${image.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${image.downloads}</p></li>
        </ul>
        </a>
        
      </li>
    `;
    galleryElement.insertAdjacentHTML('beforeend', cardHTML);
  });
  lightbox.refresh();
}
