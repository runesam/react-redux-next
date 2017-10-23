import axios from 'axios';

const API_KEY = '8e7e5ad91b6ab8cee2866027ff6491d1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export { FETCH_WEATHER, selectBook, fetchWeather };
