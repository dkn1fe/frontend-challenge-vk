import { useEffect } from "react";
import { UsePagination } from "../../../shared/hooks/UsePagination";
import { onPaginationCats } from "../../../shared/api/onPaginationCats";
import "../style/Pagination.scss";

export const Pagination = ({ setCatsList }) => {
  const { isAtBottom, page } = UsePagination();

  useEffect(() => {
    if (isAtBottom) {
      onPaginationCats(page).then((result) =>
        setCatsList((catsList) => [...catsList, ...result])
      );
    }
  }, [isAtBottom]);

  return (
    <div className="pagination__text">
      <p>... Загружаем пушистиков ...</p>
    </div>
  );
};
