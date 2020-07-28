import { configureStore } from '@reduxjs/toolkit';
import { getStorageData } from './storage';
import rootReducer from './reducers';

class AsyncStore {
  private static data = null;

  static async getStore() {
    if (AsyncStore.data) return AsyncStore.data;

    const cache = await getStorageData();
    const store = configureStore({ reducer: rootReducer, preloadedState: cache || undefined });
    AsyncStore.data = store;
    return store;
  }
}

export default AsyncStore;
