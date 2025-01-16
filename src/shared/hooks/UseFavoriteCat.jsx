import {
  addFavoriteInStorage,
  deleteFavoriteInStorage,
} from "../helpers/FavoriteStorage.helper";
import { addFavorite, deleteFavorite, getAllFavoriteIdCats } from "../utils";
import { useState } from "react";

export const UseFavoriteCat = ({ favoriteCats, catsList, setFavoriteCats }) => {
  const [catId, setCatId] = useState(null);

  const favoriteAllId = favoriteCats && getAllFavoriteIdCats(favoriteCats);

  const addOrDeleteFavorite = (id) => {
    const favoriteCat = catsList && catsList.find((cat) => cat.id === id);

    if (!favoriteAllId?.includes(id)) {
      setFavoriteCats((favorites) => {
        const updatedFavorites = addFavorite(favorites, favoriteCat);
        addFavoriteInStorage(updatedFavorites);
        return updatedFavorites;
      });
    }

    if (favoriteAllId?.includes(id)) {
      setFavoriteCats((favorites) => {
        const updatedFavorites = deleteFavorite(favorites, id);
        deleteFavoriteInStorage(updatedFavorites);
        return updatedFavorites;
      });
    }
  };

  const handleChooseCat = (id, type) => {
    if (type === "show") setCatId(id);
    if (type === "delete") setCatId(null);
  };

  return {
    catId,
    favoriteAllId,
    addOrDeleteFavorite,
    handleChooseCat,
  };
};
