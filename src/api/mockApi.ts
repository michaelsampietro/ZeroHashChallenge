import apiData from "./api-data.json";

// Feel free to type this function
export const mockApi = <T>(): Promise<T> =>
  new Promise((r) => setTimeout(() => r(apiData as T), 800));
