import React from "react";
import MapContainer from "./map";
import { useTranslation } from "react-i18next";
import KaspiPay from '../images/kaspiPay.webp';
import BccPay from '../images/logobcc.webp';
import ContactUsToday from "./contactUsToday";

export function Contact() {

  const { t } = useTranslation();

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="discription">
            <h2 id="contanctTitle">VitadentT</h2>
            <p>
            {t('contact.adress')
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}{" "}
            </p>
            <div>
              <p>+7 (7212) 32‒32-32</p>
              <p>+7‒775‒534‒34‒34</p>
              <p>+7‒778‒534‒34‒34</p>
            </div>
            <div>
              <p>{t('contact.workSchedule.text1')}</p>
              <p>{t('contact.workSchedule.text2')}</p>
              <p>{t('contact.workSchedule.text3')}</p>
              <p>{t('contact.workSchedule.text4')}</p>
              <div className="pay"> 
                <img src={KaspiPay} alt="Kaspi Pay" />
                <img src={BccPay} alt="Kaspi Pay" />
              </div>
              
            </div>
          </div>
          <div className="mapDiscription">
            <MapContainer />
          </div>
        </div>
      </div>
      <ContactUsToday />
    </div>
  );
}
