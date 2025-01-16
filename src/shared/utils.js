export const addFavorite = (array, favorite) => {
  return [...array, favorite];
};

export const deleteFavorite = (array, id) => {
  return array?.filter((item) => item.id !== id);
};

export const getAllFavoriteIdCats = (array) => {
  return array?.map((item) => item.id)
}