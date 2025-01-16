import { _baseUrl, _apiKey } from "./api";


export const onGetAllCats = async() => {
  const response = await fetch(`${_baseUrl}/images/search?limit=15`, {
      headers: {
          'x-api-key': _apiKey
      }
  });
  return await response.json();
}