import {
  chooseTabsInStorage,
  onGetTabInStorage,
} from "../../../shared/helpers/TabsStorage.helper";
import { useEffect } from "react";
import { tabsInfoList } from "../../../shared/tabsInfoList";
import "../style/Header.scss";

export const Header = ({ setTab, chooseTab }) => {
  
  const handleSetTab = (tab) => {
    setTab(tab);
    chooseTabsInStorage(tab);
  };

  useEffect(() => {
    const tab = onGetTabInStorage();
    setTab(tab);
  }, [chooseTab]);

  return (
    <div className="container">
      <div className="header__button">
        {tabsInfoList.map((tab) => (
          <button
            key={tab.id}
            className={chooseTab === tab.label ? "active" : ""}
            onClick={() => handleSetTab(tab.label)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};
