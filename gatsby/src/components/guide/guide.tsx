import useMobile from '@/hooks/useMobile';
import classNames from 'classnames';
import { IArea, IMeasure } from 'graphql-types';
import React from 'react';
import Button from '../button';
import ContentBox from '../content-box';
import Link from '../link';
import MeasureList from '../measure-list';
import SituationsBox from '../situations-box';
import GuideItem from './guide-item';
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
            'guide',
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
                  {/* If is situation */}
                  {isSituationBox &&
                    (items as IArea[]).map((x) => {
                      return (
                        <GuideItem
                          key={x.id}
                          title={x.name}
                          buttonUrl={x.path.alias}
                          buttonText="Detail"
                          description=""
                        />
                      );
                    })}
                  {/* If is measure */}
                  {!isSituationBox &&
                    (items as IMeasure[]).map((x) => {
                      return (
                        <GuideItem
                          key={x.id}
                          title={x.title}
                          buttonUrl=""
                          buttonText="Detail"
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="guide__more">
                  <Link to={buttonHref} className="btn--color-white">
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
