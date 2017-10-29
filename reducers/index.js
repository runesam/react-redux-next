import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BooksReducer from './reducer_books';
import ActiveBooksReducer from './reducer_active_book';
import WeatherReducer from './reducer_weather';
import PostsReaducer from './reducer_posts';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBooksReducer,
  weather: WeatherReducer,
  posts: PostsReaducer,
  form: formReducer
});

export default rootReducer;
