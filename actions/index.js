import axios from 'axios';

function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

/* weather stuff*/
const API_KEY = '8e7e5ad91b6ab8cee2866027ff6491d1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

/* blogger stuff*/
const PostsURL = 'http://reduxblog.herokuapp.com/api';
const PostsKey = '?key=runesam';
const FETCH_POSTS = 'FETCH_POSTS';

function fetchPosts() {
    const request = axios.get(`${PostsURL}/posts${PostsKey}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export {
    FETCH_WEATHER, FETCH_POSTS,
    selectBook, fetchWeather, fetchPosts
};
