import { _baseUrl, _apiKey } from "./api";

export const onPaginationCats = async (page = 1) => {
  const response = await fetch(
    `${_baseUrl}/images/search?page=${page}&limit=15`,
    {
      headers: {
        "x-api-key": _apiKey,
      },
    }
  );
  return await response.json();
};

