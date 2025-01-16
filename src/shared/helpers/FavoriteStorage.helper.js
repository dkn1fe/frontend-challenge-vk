export const addFavoriteInStorage = (favoriteCats) => {
  localStorage.setItem("favoriteCats", JSON.stringify(favoriteCats));
};

export const deleteFavoriteInStorage = (favoriteCats) => {
  localStorage.setItem("favoriteCats", JSON.stringify(favoriteCats));
};

export const onGetFavoriteCatsInStorage = () => {
  const storedFavorites = localStorage.getItem("favoriteCats");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};