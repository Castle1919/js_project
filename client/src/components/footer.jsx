import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";



export function Footer() {

  const { t } = useTranslation();
  return (
    <div>
      <div className="footer">
        <div className="row">
          <ul>
            <li>
              <NavLink to="/contact">{t('header.menu.contact')}</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">{t('header.menu.aboutUs')}</NavLink>
            </li>
            <li>
              <NavLink to="/service">{t('header.menu.service')}</NavLink>
            </li>
          </ul>
        </div>

        <div className="row">
          <h3>VitadentT 2025 VitadentT || Designed
          By: Castle</h3>
        </div>
      </div>
    </div>
  );
}
