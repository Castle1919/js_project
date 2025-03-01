import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import ContactUsToday from "./contactUsToday";
import arrow1 from './../images/arrow1.webp'
import stomatSurgeon from './../images/gvrach.webp'
import stomatTherapist from './../images/vrach.webp'
import nurse from './../images/medsestra.webp'


export const AboutUs = () => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: stomatSurgeon,
      name: t('aboutUs.slider.stomatSurgeon.name'),
      specialist: t('aboutUs.slider.stomatSurgeon.specialist'),
      seniority: t('aboutUs.slider.stomatSurgeon.seniority'),
      description: t('aboutUs.slider.stomatSurgeon.description'),
    },
    {
      image: stomatTherapist,
      name: t('aboutUs.slider.stomatTherapist.name'),
      specialist: t('aboutUs.slider.stomatTherapist.specialist'),
      seniority: t('aboutUs.slider.stomatTherapist.seniority'),
      description: t('aboutUs.slider.stomatTherapist.description'),
    },
    {
      image: nurse,
      name: t('aboutUs.slider.nurse.name'),
      specialist: t('aboutUs.slider.nurse.specialist'),
      seniority: t('aboutUs.slider.nurse.seniority'),
      description: t('aboutUs.slider.nurse.description'),
    },

  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div>
      <div className="section">
        <div className="container title">
          <h2>
          {t("aboutUs.title.heading")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}{" "}
          </h2>
          <p>
          {t('aboutUs.title.description')}
          </p>
          <h2 className='m-auto'>{t('aboutUs.title.heading2')}</h2>
        </div>
        <div className='containerWrapper'>
        <div className="containerSlider">
          <div className="slider" >
            <div className="sliderImages">
              <img src={slides[currentIndex].image} alt="Slide image" />
            </div>
            <div className="slider-controls">
              <div className="left-controls">
                <button className="prev" onClick={handlePrev}>
                  <img src={arrow1} alt="Arrow 1" />
                </button>
              </div>
              <div className="right-controls">
                <button className="next" onClick={handleNext}>
                  <img src={arrow1} alt="Arrow 1" />
                </button>
              </div>
            </div>
          </div>
        </div>
          <div className="textWrapper">
            <div className="sliderTextName">{slides[currentIndex].name}</div>
            <div className="sliderTextSpecialist">
              {slides[currentIndex].specialist}
            </div>
            <div className="sliderTextDescription">
              {slides[currentIndex].seniority} <br/>
              {slides[currentIndex].description}
            </div>
          </div>
        </div>
      </div>
      <ContactUsToday  />
    </div>
  );
};

export default AboutUs;