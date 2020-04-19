import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../../i18n';
import RNRestart from 'react-native-restart';

export const setItem = async (key, value) => {
  try {
    let data = value;
    try {
      data = JSON.stringify(data);
    } catch (error) {
      console.error('error stringifying value', error);
    }
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    console.error('error saving value', e);
  }
};

export const setLanguage = async value => {
  try {
    let data = value;
    try {
      data = JSON.stringify(data);
    } catch (error) {
      console.error('error stringifying value', error);
    }
    await AsyncStorage.setItem('@language', data);
    RNRestart.Restart();
  } catch (e) {
    console.error('error saving value', e);
  }
};

export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      let data = value;
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.error('error parsing value', error);
      }
      return data;
    }
  } catch (e) {
    console.error('error reading value', e);
  }
  return null;
};

export const getLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('@language');
    if (value !== null) {
      let language = value;
      try {
        language = JSON.parse(language);
      } catch (error) {
        console.error('error parsing value', error);
      }
      return I18n.locale = language;
    }
  } catch (e) {
    console.error('error reading value', e);
  }
  return null;
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('error removing value', error);
  }
};

export const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('error removing all', error);
  }
};

export const getAllKeys = async () => {
  try {
    const data = await AsyncStorage.getAllKeys();
    if (data[0]) {
      return data;
    }
  } catch (e) {
    console.error('error getting all keys', e);
  }
  return null;
};
