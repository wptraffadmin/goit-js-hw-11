// main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');

    // Перевірка, чи елементи існують перед додаванням слухачів
    if (!searchButton || !searchInput) {
        console.error('Elements not found');
        return;
    }

    // Ініціалізація SimpleLightbox
    let lightbox = new SimpleLightbox('.gallery a');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query === '') {
            iziToast.warning({
                title: 'Warning',
                message: 'Please enter a search query.',
            });
            return;
        }

        // Показуємо індикатор завантаження
        showLoadingIndicator();

        fetchImages(query)
            .then(images => {
                // Приховуємо індикатор завантаження
                hideLoadingIndicator();

                // Відображаємо отримані зображення
                renderImages(images);

                // Оновлюємо SimpleLightbox після додавання нових зображень
                lightbox.refresh();
            })
            .catch(error => {
                // Приховуємо індикатор завантаження у разі помилки
                hideLoadingIndicator();
                iziToast.error({
                    title: 'Error',
                    message: error.message,
                });
            });
    });
});
