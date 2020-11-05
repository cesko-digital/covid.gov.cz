import React from 'react';

import styles from './guide.module.scss';

const Guide: React.FC = ({ children }) => {
  return (
    <div className="mx-3 my-1">
      <div className={`guide guide--hp guide--visible mt-0 ${styles.guide}`}>
        <div className="guide__inner">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div>
                <h2 className="guide__title">
                  <strong>Průvodce</strong> životními situacemi
                </h2>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="row boxes boxes--light boxes--eq">
                <div className="col-12 col-sm-6 col-lg-4 box">
                  <div className="box__inner">
                    <h3 className="box__title" style={{ height: '78px' }}>
                      <a href="#" className="inverse">
                        Odchod do&nbsp;starobního důchodu
                      </a>
                    </h3>
                    <a
                      href="#"
                      className="btn btn-inverse btn--raw btn--more box__more"
                    >
                      Rodina
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 box">
                  <div className="box__inner">
                    <h3 className="box__title" style={{ height: '78px' }}>
                      <a href="#" className="inverse">
                        Invalidita a&nbsp;žádost o&nbsp;invalidní důchod
                      </a>
                    </h3>
                    <a
                      href="#"
                      className="btn btn-inverse btn--raw btn--more box__more"
                    >
                      Sociální zabezpečení
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 box">
                  <div className="box__inner">
                    <h3 className="box__title" style={{ height: '78px' }}>
                      <a href="#" className="inverse">
                        Rodičovský příspěvek
                      </a>
                    </h3>
                    <a
                      href="#"
                      className="btn btn-inverse btn--raw btn--more box__more"
                    >
                      Rodina
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 box">
                  <div className="box__inner">
                    <h3 className="box__title" style={{ height: '78px' }}>
                      <a href="#" className="inverse">
                        Peněžitá pomoc v&nbsp;mateřství
                      </a>
                    </h3>
                    <a
                      href="#"
                      className="btn btn-inverse btn--raw btn--more box__more"
                    >
                      Rodina
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 box">
                  <div className="box__inner">
                    <h3 className="box__title" style={{ height: '78px' }}>
                      <a href="#" className="inverse">
                        Nemocenské - dočasná pracovní neschopnost zaměstnance
                      </a>
                    </h3>
                    <a
                      href="#"
                      className="btn btn-inverse btn--raw btn--more box__more"
                    >
                      Sociální zabezpečení
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 box">
                  <div className="box__inner">
                    <h3 className="box__title" style={{ height: '78px' }}>
                      <a href="#" className="inverse">
                        Vydání cestovního dokladu
                      </a>
                    </h3>
                    <a
                      href="#"
                      className="btn btn-inverse btn--raw btn--more box__more"
                    >
                      Občan a&nbsp;stát
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="guide__more">
                <a
                  href="#"
                  className="btn btn-outline-primary btn--color-white"
                >
                  Zobrazit vše
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
