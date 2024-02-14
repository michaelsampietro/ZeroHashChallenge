import apiData from './api-data.json'
import { MockApiResponse } from './types'

// Feel free to type this function
export const mockApi = (): Promise<MockApiResponse> =>
  new Promise((r) => setTimeout(() => r(apiData as MockApiResponse), 800))
