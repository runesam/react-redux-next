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
const CREATE_POST = 'CREATE_POST';
const FETCH_POST = 'FETCH_POST';
const DELETE_POST = 'DELETE_POST';

function fetchPosts() {
    const request = axios.get(`${PostsURL}/posts${PostsKey}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

function createPost(data) {
    const request = axios.post(`${PostsURL}/posts${PostsKey}`, data);
    return {
        type: CREATE_POST,
        payload: request
    };
}

function fetchPost(id) {
    const request = axios.get(`${PostsURL}/posts/${id}${PostsKey}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}

function deletePost(id) {
    const request = axios.delete(`${PostsURL}/posts/${id}${PostsKey}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export {
    FETCH_WEATHER, FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST,
    selectBook, fetchWeather, fetchPosts, createPost, fetchPost, deletePost
};
