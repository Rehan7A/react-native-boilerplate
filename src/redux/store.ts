import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalAppReducer from './reducers/global-app.reducer';

const rootReducer = combineReducers({
  globalAppReducer: globalAppReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'EmployeeApp',
    storage: AsyncStorage,
    whitelist: [],
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: gdm =>
    gdm({
      serializableCheck: {
        ignoreActions: true,
      },
      immutableCheck: false,
    }),
});
const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;
export {AppDispatch, RootState, store, persistor};
