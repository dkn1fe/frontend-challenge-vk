import "../../allCatsList/style/AllCatsList.scss";
import { Heart } from "lucide-react";

export const CatCard = ({
  catId,
  id,
  url,
  addOrDeleteFavorite,
  favoriteAllId,
  handleChooseCat,
}) => {
  return (
    <div
      onMouseEnter={() => handleChooseCat(id, "show")}
      onMouseLeave={() => handleChooseCat(id, "delete")}
      key={id}
      className="cats__list__item"
    >
      {catId === id && (
        <div onClick={() => addOrDeleteFavorite(id)} className="cats__heart">
          <Heart
            fill={favoriteAllId.includes(id) ? "red" : "none"}
            color="red"
            size={40}
          />
        </div>
      )}
      <div className="mobile__cats">
        <div onClick={() => addOrDeleteFavorite(id)} className="cats__heart">
          <Heart
            fill={favoriteAllId.includes(id) ? "red" : "none"}
            color="red"
            size={40}
          />
        </div>
      </div>
      <img loading="lazy" alt="cat picture" src={url} />
    </div>
  );
};
