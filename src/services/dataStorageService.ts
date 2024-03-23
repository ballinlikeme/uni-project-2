import { StorageKeys } from "../constant";

export class DataStorageService {
  static saveData(data: unknown, key: StorageKeys) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static retrieveData(key: StorageKeys) {
    const dataFromLS = localStorage.getItem(key);
    if (dataFromLS) {
      const parsedData = JSON.parse(dataFromLS);
      return parsedData;
    }
    return null;
  }
}
