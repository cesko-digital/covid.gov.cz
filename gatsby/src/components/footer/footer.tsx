import React from 'react';
import Link from '@/components/link';

const Footer: React.FC = () => {
  return (
    <div className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__links">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer__box pb-4 pb-lg-0">
                  <h3>Užitečné odkazy</h3>
                  <ul>
                    <li>
                      <Link label="Opatření v rámci celé ČR" to="#" />
                    </li>
                    <li>
                      <Link label="Aktuální čísla nakažených" to="#" />
                    </li>
                    <li>
                      <Link label="Přehled všech opatření" to="#" />
                    </li>
                    <li>
                      <Link label="Často se ptáte" to="#" />
                    </li>
                    <li>
                      <Link label="Poradna pro každého" to="#" />
                    </li>
                    <li>
                      <Link label="další užitečný odkaz" to="#" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__common">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="footer__box pb-3 pb-sm-0">
                  <ul>
                    <li>
                      <Link
                        to="https://portal.gov.cz/prohlaseni-o-pristupnosti/"
                        label="Prohlášení o přístupnosti"
                      />
                    </li>
                    <li>
                      <Link
                        to="https://portal.gov.cz/odkazy/informace"
                        label="Informace o zpracování osobních údajů"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="footer__box">
                  <p className="footer__brand">
                    2020&nbsp;© Ministerstvo vnitra • Informace jsou poskytovány
                    v&nbsp;souladu se zákonem č.&nbsp;106/1999&nbsp;Sb.,
                    o&nbsp;svobodném přístupu k&nbsp;informacím.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
