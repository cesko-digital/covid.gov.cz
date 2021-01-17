import useMobile from '@/hooks/useMobile';
import classNames from 'classnames';
import { IArea, IMeasure } from '@graphql-types';
import React from 'react';
import Button from '../button';
import Col from '../col';
import ContentBox from '../content-box';
import { useTranslation } from '@/components/i18n';
import MeasureList from '../measure-list';
import Row from '../row';
import SituationsBox from '../situations-box';
import GuideItem from './guide-item';
import classes from './guide.module.scss';

interface IProps {
  items: IArea[] | IMeasure[] | any;
  title: string;
  buttonHref?: string;
  buttonText?: string;
  description?: string;
  variant?: 'white' | 'blue' | 'green';
  itemDescriptions?: string[];
}

const isSituation = (x: any): x is IArea => {
  return (x as IArea)?.name !== undefined;
};

const Guide: React.FC<IProps> = ({
  items,
  title,
  buttonText,
  description,
  buttonHref = '',
  variant = 'blue',
  itemDescriptions,
}) => {
  const { t } = useTranslation();
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
            'guide--visible',
            'mt-0',
            'mb-2',
            { [classes.guideWhite]: variant === 'white' },
            { [classes.guideGreen]: variant === 'green' },
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
                    (items as IArea[]).map((x, i) => {
                      return (
                        <GuideItem
                          key={x.id}
                          title={x.name}
                          buttonUrl={x.path.alias}
                          buttonText={items[i].buttonText || t('more')}
                          description={itemDescriptions[i] ?? ''}
                          variant={variant}
                          iconCode={x.relationships?.icon?.code}
                        />
                      );
                    })}
                  {/* If is measure */}
                  {!isSituationBox &&
                    (items as IMeasure[]).map((x, i) => {
                      return (
                        <GuideItem
                          key={x.id}
                          title={x.title}
                          buttonUrl={x.path.alias}
                          variant={variant}
                          buttonText={t('more')}
                          description={itemDescriptions[i] ?? ''}
                          area={x.relationships?.region
                            ?.map((item) => item.name)
                            .join(', ')}
                          validFrom={x.valid_from}
                          validTo={x.valid_to}
                        />
                      );
                    })}
                </Row>
              </Col>
            </Row>
            {buttonText && (
              <Row>
                <Col col={12} colLg={3}>
                  <div className="guide__more">
                    <Button
                      href={buttonHref}
                      className={classNames(
                        'btn--color-white',
                        classes.guideBtn,
                        {
                          [classes.guideBtnBlue]: variant === 'white',
                          [classes.guideBtnGreen]: variant === 'green',
                        },
                      )}
                      text={buttonText}
                    />
                  </div>
                </Col>
              </Row>
            )}
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
      {isSituationBox ? (
        <SituationsBox situations={items} />
      ) : (
        <MeasureList measures={items} descriptions={itemDescriptions} />
      )}
    </ContentBox>
  );
};

export default Guide;
