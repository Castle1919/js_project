import React, { useRef } from "react";
import { NavLink, } from 'react-router-dom'
import smile from "./../images/smile.webp";
import SecondImage from "./../images/secondImg.webp";
import ThirdImg from "./../images/ThirdImg.webp";
import fouthImg from "./../images/fouthImg.webp";
import fifthImg from "./../images/fifthImg.webp";
import { useTranslation } from "react-i18next";
import ContactUsToday from "./contactUsToday";

export function Main() {
  const { t, i18n } = useTranslation();
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <main>
      <section className="section">
        <div className="container wrapper">
          <div className="discription">
            <h2>{t("main.container1.heading")}</h2>
            <p>
              {t("main.container1.description")}
            </p>
            <button className="btn" onClick={scrollToTarget}>
            {t("main.button.signUp")}
            </button>
          </div>
          <div className="image">
            <img id="imageOne" src={smile} alt="Ulybka" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container wrapper">
          <div className="discription">
            <h2>{t("main.container2.heading")}</h2>
            <p>
            {t("main.container2.description")}
              
            </p>
            <NavLink to="/contact">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={SecondImage} alt="stul" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="containerReverse">
          <div className="discription">
            <h2>
            {t("main.container3.heading")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}{" "}
            </h2>
            <p>
            {t("main.container3.description")}
            </p>
            <NavLink to="/service">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={ThirdImg} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container wrapper">
          <div className="discription">
          <h2>
          {t("main.container4.heading")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}{" "}
          </h2>
            <p>
            {t("main.container4.description")}

            </p>
            <NavLink to="/faq">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={fouthImg} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="containerReverse">
          <div className="discription">
          <h2>{t("main.container5.heading")}</h2>
          <p>
            {t("main.container5.description")}
          </p>
            <NavLink to="/aboutUs">
              <button className="btn">{t("main.button.go")}</button>
            </NavLink>
          </div>
          <div className="image">
            <img src={fifthImg} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container wrapper" id="containerRecall">
          <div className="recall">
            <p>
            {t("main.recall.text")}
            </p>
            <h2>{t("main.recall.name")}</h2>
          </div>
        </div>
      </section>
      <ContactUsToday/>
    </main>
  );
}
