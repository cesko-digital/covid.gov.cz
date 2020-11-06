import useMobile from '@/hooks/useMobile';
import classNames from 'classnames';
import { IArea, IMeasure } from 'graphql-types';
import React from 'react';
import Button from '../button';
import ContentBox from '../content-box';
import Link from '../link';
import MeasureList from '../measure-list';
import SituationsBox from '../situations-box';
import classes from './guide.module.scss';

interface IProps {
  items: IArea[] | IMeasure[];
  title: string;
  buttonHref: string;
  buttonText: string;
  variant?: 'white' | string;
}

const Guide: React.FC<IProps> = ({ items, title, buttonText, buttonHref }) => {
  const isMobile = useMobile();

  const isSituationBox = isSituation(items[0]);

  title = title.replace('<p>', '').replace('</p>', '');

  if (!isMobile) {
    return (
      <div>
        {isSituationBox}
        <div
          className={classNames(
            'guide',
            'guide--hp',
            'guide--visible',
            'mt-0',
            classes.guide,
          )}
        >
          <div className="guide__inner">
            <div className="row">
              <div className="col-12 col-lg-3">
                <div>
                  <h2
                    className="guide__title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
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

                  <Link to={buttonHref}>
                    <Button text={buttonText} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ContentBox
      title={title}
      boldedTitleCount={2}
      buttonText={buttonText}
      buttonHref={buttonHref}
      variant={!isSituationBox ? 'white' : ''}
    >
      {isSituationBox && <SituationsBox situations={items} />}
      {!isSituationBox && <MeasureList measures={items} />}
    </ContentBox>
  );
};

const isSituation = (x: any): x is IArea => {
  return (x as IArea).name !== undefined;
};

export default Guide;
