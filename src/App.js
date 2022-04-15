import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "./components/UI/NavBar";

function App() {
  const { t } = useTranslation();

  const releaseDate = new Date('2022-06-04');
  const timeDifference = releaseDate - new Date();
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return (
    <div className="green-bar">
      <NavBar/>
      <div className="container">
        <h1>{t("days_since_release", { number_of_days })}</h1>
      </div>
    </div>
  );
}

export default App;

