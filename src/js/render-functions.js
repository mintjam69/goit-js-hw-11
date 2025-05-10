import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Показ лоадера
export const showLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'block';
};

// Приховання лоадера
export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
};

// Очищення галереї
export const clearGallery = () => {
    const gallery = document.querySelector('.gallery');
    if (gallery) gallery.innerHTML = '';
};

// Рендер зображень
export const renderImages = (images) => {
    const gallery = document.querySelector('.gallery');

    const markup = images
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
            <li class="gallery-item">
                <a href="${largeImageURL}" class="gallery-link">
                    <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes:</b> ${likes}</p>
                        <p class="info-item"><b>Views:</b> ${views}</p>
                        <p class="info-item"><b>Comments:</b> ${comments}</p>
                        <p class="info-item"><b>Downloads:</b> ${downloads}</p>
                    </div>
                </a>
            </li>
        `)
        .join('');
  
    gallery.insertAdjacentHTML('beforeend', markup);
};

// Показ помилки
export const showError = (message) => {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
        timeout: 2000,
        backgroundColor: '#EF4040',
        closeOnClick: true,
    });
};
