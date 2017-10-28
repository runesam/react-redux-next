import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBooksReducer from './reducer_active_book';
import WeatherReducer from './reducer_weather';
import PostsReaducer from './reducer_posts';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBooksReducer,
  weather: WeatherReducer,
  posts: PostsReaducer
});

export default rootReducer;
