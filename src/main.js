import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

// обробка події submit форми пошуку
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();
    if (!query) {
        showError('Please enter a search term.');
        loader.style.display = 'none';
        return;
    }

    loader.style.display = 'block';
    gallery.innerHTML = '';

    fetchImages(query)
        .then(images => {
            console.log('Images received', images);
            if (images.length === 0) {
                showError('Sorry, there are no images matching your search query. Please try again!');
            } else {
                renderImages(images);
                lightbox.refresh();
            }
        })
        .catch(error => {
            console.log('Error:', error);
            showError(error.message);
        })
        .finally(() => {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
});
