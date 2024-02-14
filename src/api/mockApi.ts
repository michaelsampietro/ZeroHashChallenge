import apiData from './api-data.json'
// Feel free to type this function
export const mockApi = () =>
  new Promise((r) => setTimeout(() => r(apiData), 800))
