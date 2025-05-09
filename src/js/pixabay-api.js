import axios from 'axios';

const API_KEY = '46111886-e1974f40af7d3aa808257f9c9';

export const fetchImages = async (query) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.hits.length === 0) {
            throw new Error('No images found');
        }

        return data.hits;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
