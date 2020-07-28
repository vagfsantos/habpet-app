import AsyncStorage from '@react-native-community/async-storage';
import { RootState } from './reducers';

const STORAGE_KEY = '@habpet/v1';

export const storeData = async (value: RootState) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    // eslint-disable-next-line no-alert
    window.alert('Error while saving data!');
  }
};

export const getStorageData = async (): Promise<RootState> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return JSON.parse(data);
  } catch (e) {
    // eslint-disable-next-line no-alert
    window.alert('Error while getting data!');
  }

  return null;
};
