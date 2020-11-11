import classNames from 'classnames';
import React from 'react';
import Button from '../button';
import Col from '../col';
import ContentIcon from '../content-icon';
import classes from './guide-item.module.scss';

import Time from '@/components/time';
import I18n from '@/components/i18n';

interface IProps {
  title: string;
  description?: string;
  buttonUrl: string;
  variant?: 'white' | 'blue';
  buttonText: string;
  iconCode?: string;
  area?: string;
  validFrom?: string;
  validTo?: string;
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
}) => {
  return (
    <>
      <Col col={12} colSm={6} colLg={4} className="box">
        <div className="box__inner">
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
              <p>
                {validFrom && (
                  <Time
                    displayTime
                    datetime={validFrom}
                    prefix={`${I18n('from')} `}
                  />
                )}
                {validTo && (
                  <Time
                    displayTime
                    datetime={validTo}
                    prefix={`${I18n('to')} `}
                  />
                )}
              </p>
            </div>
          )}
          {description && (
            <p
              className={classNames(classes.guideItemDescriptionText, {
                [classes.guideItemDescriptionTextBlue]: variant === 'white',
              })}
            >
              {description}
            </p>
          )}
          <Button
            variant="outline-yellow"
            text={buttonText}
            href={buttonUrl}
            linkTitle={title}
            className={classNames(classes.guideItemBtn, {
              [classes.guideItemBtnBlue]: variant === 'white',
            })}
          />
        </div>
      </Col>
    </>
  );
};

export default GuideItem;
