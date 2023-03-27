import {configureStore} from '@reduxjs/toolkit';

import favoritesReducer from './favorites';//which is the default export of favorites.js

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer
    }
});

