import React from "react";
import { useTranslation } from "react-i18next";
import "../App.scss";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <h1>{t("about.title")}</h1>
      <p>{t("about.description")}</p>
    </div>
  );
};

export default AboutUs;
