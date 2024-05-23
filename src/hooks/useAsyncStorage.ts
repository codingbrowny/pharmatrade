import AsyncStorage from '@react-native-async-storage/async-storage';
const useAsyncStorage = () => {
  /**Sae data to storage or update when it exist */
  const setItem = async (key: string, value: string) => {
    const stringedValue =
      typeof value === 'string' ? value : JSON.stringify(value);
    try {
      await AsyncStorage.setItem(key, stringedValue);
    } catch (error) {
      const err = error as Error;
      console.log(err);
    }
  };

  /** Get data from the storage unit */
  const getItem = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      const err = error as Error;
      console.log(err);
    }
  };

  /**Remove item from storage unit */
  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
    }
  };

  return { setItem, getItem, removeItem };
};

export default useAsyncStorage;
