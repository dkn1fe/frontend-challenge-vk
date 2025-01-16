import { UseFavoriteCat } from "../../../shared/hooks/UseFavoriteCat";
import { CatCard } from "../../CatCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  itemVariants,
  containerVariants,
} from "../../../shared/animateVariants";
import "../style/AllCatsList.scss";

export const AllCatsList = ({
  favoriteCats,
  setFavoriteCats,
  catsList,
}) => {
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
          {catsList &&
            catsList.map((cat) => (
              <motion.div
                key={cat.id}
                variants={itemVariants}
                exit={{ opacity: 0, y: -20 }}
              >
                <CatCard
                  key={cat.id}
                  catId={catId}
                  id={cat.id}
                  url={cat.url}
                  addOrDeleteFavorite={addOrDeleteFavorite}
                  favoriteAllId={favoriteAllId}
                  handleChooseCat={handleChooseCat}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
