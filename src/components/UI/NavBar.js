import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavBar = (props) => {
  const [languageCode, setLanguageCode] = useState(true);

  const changeLanguageHandler = () => {
    setLanguageCode((prevLanguageCode) => !prevLanguageCode);
    const newCode = languageCode ? "en" : "cn";
    i18next.changeLanguage(newCode);
  };

  const toggleGreen = languageCode ? "#55CA8A" : "#aeaeae";
  const toggleMoveCircle = languageCode ? 'circle circle-left' : 'circle circle-right'

  const { t } = useTranslation();
  return (
    <div className="nav-bar">
      <h2>{t("welcome_message")}</h2>
      <h2 className="programs">{t("programs")}</h2>
      <button
        className="button"
        type="button"
        onClick={changeLanguageHandler}
        style={{ color: toggleGreen, border: `2px solid ${toggleGreen}` }}
      >
        <svg
          className={toggleMoveCircle}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle  className="circle" cx="12" cy="12" r="12" fill={toggleGreen} />
        </svg>

        <p className="button-english">EN</p>
        <p className="button-chinese">CN</p>
      </button>
    </div>
  );
};

export default NavBar;
