import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { AllCatsList } from "../components/allCatsList";
import { FavoriteCatsList } from "../components/favoriteCatsList";
import { Pagination } from "../components/Pagination";
import { onGetAllCats } from "../shared/api/onGetAllCats";
import "./App.scss";

export const App = () => {
  const [chooseTab, setChooseTab] = useState("all");
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [catsList, setCatsList] = useState([]);

  useEffect(() => {
    onGetAllCats().then((res) => setCatsList(res));
  }, []);

  return (
    <>
      <header>
        <Header chooseTab={chooseTab} setTab={setChooseTab} />
      </header>
      {chooseTab === "all" && (
        <main>
          <AllCatsList
            favoriteCats={favoriteCats}
            setFavoriteCats={setFavoriteCats}
            setCatsList={setCatsList}
            catsList={catsList}
          />
          <Pagination setCatsList={setCatsList} catsList={catsList} />
        </main>
      )}
      {chooseTab === "favorite" && (
        <FavoriteCatsList
          favoriteCats={favoriteCats}
          setFavoriteCats={setFavoriteCats}
          catsList={catsList}
        />
      )}
    </>
  );
};
