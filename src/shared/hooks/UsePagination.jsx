import { useState, useEffect } from "react";

export const UsePagination = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setIsAtBottom(true);
      setPage((page) => page + 1); 
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isAtBottom, page };
};
