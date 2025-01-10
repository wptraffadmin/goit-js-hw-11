const API_KEY = '48154537-527b84123da1832c7b7680c8e';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1, perPage = 9) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => data.hits) // Повертає масив зображень
        .catch(error => {
            console.error(error);
            throw new Error('Something went wrong!');
        });
}
