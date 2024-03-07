
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.card');
lightbox.refresh();

export function renderGallery(images) {
  galleryElement.innerHTML = '';

  images.forEach(image => {
    const card = document.createElement('li');
    card.classList.add('card');

    const link = document.createElement('a');
    link.href = image.largeImageURL;
    link.classList.add('link');
    card.appendChild(link);

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    link.appendChild(img);

    const likes = document.createElement('div');
    likes.textContent = `Likes: ${image.likes}`;
    card.appendChild(likes);

    const views = document.createElement('div');
    views.textContent = `Views: ${image.views}`;
    card.appendChild(views);

    const comments = document.createElement('div');
    comments.textContent = `Comments: ${image.comments}`;
    card.appendChild(comments);

    const downloads = document.createElement('div');
    downloads.textContent = `Downloads: ${image.downloads}`;
    card.appendChild(downloads);

    galleryElement.appendChild(card);
  });
  lightbox.refresh();
}
