import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import restaurantsReducer from './slices/restaurants';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

export { rootPersistConfig, rootReducer };
