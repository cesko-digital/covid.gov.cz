import classNames from 'classnames';
import React from 'react';
import Button from '../button';
import Col from '../col';
import ContentIcon from '../content-icon';
import classes from './guide-item.module.scss';

import Time from '@/components/time';
import { useTranslation } from '@/components/i18n';
import Link from '../link';

interface IProps {
  title: string;
  description?: string;
  buttonUrl: string;
  variant?: 'white' | 'blue' | 'green';
  buttonText: string;
  iconCode?: string;
  area?: string;
  validFrom?: string;
  validTo?: string;
  noClamp?: boolean;
}

const GuideItem: React.FC<IProps> = ({
  title,
  buttonUrl,
  buttonText,
  iconCode,
  variant,
  description,
  area,
  validTo,
  validFrom,
  noClamp,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Col
        col={12}
        colSm={6}
        colLg={4}
        className={classNames(classes.box, 'box')}
      >
        <Link
          className={classNames(classes.clickableWrapper, 'box__inner')}
          to={buttonUrl}
          noExternalClass
        >
          <div className="d-flex flex-row">
            {iconCode && (
              <ContentIcon
                code={iconCode}
                className={classNames(classes.guideItemIcon, {
                  [classes.guideItemIconBlue]: variant === 'white',
                })}
              />
            )}
            <h3
              className={classNames(classes.guideItemTitle, {
                [classes.guideItemTitleBlue]: variant === 'white',
              })}
            >
              {title}
            </h3>
          </div>
          {(area || validFrom || validTo) && (
            <div
              className={classNames(
                'd-flex',
                'flex-row',
                'flex-wrap',
                'justify-content-between',
                classes.guideItemSubTitle,
                { [classes.guideItemSubTitleBlue]: variant === 'white' },
              )}
            >
              {/**
               * There must be a better way of handling which date to show
               * It will not layout correctly if showing both
               * Maybe show start date before it actually starts
               * and show end date during the mesurement?
               */}
              <p>{area}</p>
              <div className={classes.guideMobileWrapper}>
                {validFrom && (
                  <Time
                    datetime={validFrom}
                    prefix={`${t('from')} `}
                    displayShorterDate={true}
                    displayShortMonth={true}
                  />
                )}
                {validTo && (
                  <Time
                    datetime={validTo}
                    prefix={`${t('to')} `}
                    displayShorterDate={true}
                    displayShortMonth={true}
                  />
                )}
              </div>
              <div className={classes.guideDesktopWrapper}>
                {validFrom && (
                  <Time
                    datetime={validFrom}
                    prefix={`${t('from')} `}
                    displayShorterDate={false}
                    displayShortMonth={true}
                  />
                )}
                {validTo && (
                  <Time
                    datetime={validTo}
                    prefix={`${t('to')} `}
                    displayShorterDate={false}
                    displayShortMonth={true}
                  />
                )}
              </div>
            </div>
          )}
          {description && (
            <p
              className={classNames(classes.guideItemDescriptionText, {
                [classes.guideItemDescriptionTextBlue]: variant === 'white',
                [classes.guideItemDescriptionTextNoClamp]: noClamp,
              })}
            >
              {description}
            </p>
          )}
          <Button
            variant="outline-yellow"
            text={buttonText}
            title={title}
            className={classNames(classes.guideItemBtn, {
              [classes.guideItemBtnBlue]: variant === 'white',
            })}
          />
        </Link>
      </Col>
    </>
  );
};

export default GuideItem;
