import { useEffect } from "react";
import { UseFavoriteCat } from "../../../shared/hooks/UseFavoriteCat";
import { CatCard } from "../../CatCard";
import { onGetFavoriteCatsInStorage } from "../../../shared/helpers/FavoriteStorage.helper";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants,containerVariants } from "../../../shared/animateVariants";
import "../../allCatsList/style/AllCatsList.scss";

export const FavoriteCatsList = ({
  favoriteCats,
  setFavoriteCats,
  catsList,
}) => {
  useEffect(() => {
    const storedFavorites = onGetFavoriteCatsInStorage();
    setFavoriteCats(storedFavorites);
  }, [favoriteCats]);

  const { catId, favoriteAllId, addOrDeleteFavorite, handleChooseCat } =
    UseFavoriteCat({ favoriteCats, catsList, setFavoriteCats });

  return (
    <div className="container">
      <motion.div
        className="cats__list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {favoriteCats &&
            favoriteCats.map((cat) => (
              <motion.div
                key={cat.id}
                variants={itemVariants}
                exit={{ opacity: 0, y: -20 }}
              >
                <CatCard
                  key={cat.id}
                  catId={catId}
                  favoriteAllId={favoriteAllId}
                  addOrDeleteFavorite={addOrDeleteFavorite}
                  handleChooseCat={handleChooseCat}
                  url={cat.url}
                  id={cat.id}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
