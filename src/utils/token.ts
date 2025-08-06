import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'JOY_TOKEN';

export const saveToken = async (token: string) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);

export const clearToken = () => AsyncStorage.removeItem(TOKEN_KEY);
