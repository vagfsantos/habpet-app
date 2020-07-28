import AsyncStore from './async-store';
import { storeData } from './storage';

AsyncStore.getStore().then((store) => {
  store.subscribe(() => {
    const state = store.getState();
    storeData(state);
  });
});
