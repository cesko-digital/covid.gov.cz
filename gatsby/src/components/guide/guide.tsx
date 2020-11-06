import useMobile from '@/hooks/useMobile';
import classNames from 'classnames';
import { IArea, IMeasure } from 'graphql-types';
import React from 'react';
import Button from '../button';
import Col from '../col';
import ContentBox from '../content-box';
import I18n from '../i18n';
import Link from '../link';
import MeasureList from '../measure-list';
import Row from '../row';
import SituationsBox from '../situations-box';
import GuideItem from './guide-item';
import classes from './guide.module.scss';

interface IProps {
  items: IArea[] | IMeasure[];
  title: string;
  buttonHref: string;
  buttonText: string;
  description?: string;
  variant?: 'white' | 'blue';
}

const Guide: React.FC<IProps> = ({
  items,
  title,
  buttonText,
  description,
  buttonHref = '',
  variant = 'blue',
}) => {
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
            'mb-2',
            { [classes.guideWhite]: variant === 'white' },
            classes.guide,
          )}
        >
          <div className="guide__inner">
            <Row>
              <Col col={12} colLg={3}>
                <div>
                  <h2
                    className={classNames('guide__title', classes.guideTitle, {
                      [classes.guideTitleBlue]: variant === 'white',
                    })}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </div>
                <div>
                  <p
                    className={classNames(classes.guideDescriptionText, {
                      [classes.guideDescriptionTextBlue]: variant === 'white',
                    })}
                  >
                    {description}
                  </p>
                </div>
              </Col>
              <Col col={12} colLg={9}>
                <Row className="boxes boxes--light boxes--eq">
                  {/* If is situation */}
                  {isSituationBox &&
                    (items as IArea[]).map((x) => {
                      return (
                        <GuideItem
                          key={x.id}
                          title={x.name}
                          buttonUrl={x.path.alias}
                          buttonText={I18n('more')}
                          description=""
                          variant={variant}
                          iconCode={x.relationships?.field_ref_icon?.code}
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
                          buttonUrl={x.path.alias}
                          variant={variant}
                          buttonText={I18n('more')}
                          description={x.norm}
                          area={x.relationships?.region
                            ?.map((item) => item.name)
                            .join(', ')}
                          validFrom={x.valid_from}
                        />
                      );
                    })}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col col={12} colLg={3}>
                <div className="guide__more">
                  <Link
                    to={buttonHref}
                    className={classNames(
                      'btn--color-white',
                      classes.guideBtn,
                      {
                        [classes.guideBtnBlue]: variant === 'white',
                      },
                    )}
                  >
                    <Button text={buttonText} />
                  </Link>
                </div>
              </Col>
            </Row>
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
      variant={variant}
    >
      {isSituationBox && <SituationsBox situations={items} />}
      {!isSituationBox && <MeasureList measures={items} />}
    </ContentBox>
  );
};

const isSituation = (x: any): x is IArea => {
  return (x as IArea)?.name !== undefined;
};

export default Guide;
