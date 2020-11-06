import classNames from 'classnames';
import React from 'react';
import Button from '../button';
import Col from '../col';
import ContentIcon from '../content-icon';
import Link from '../link';
import classes from './guide-item.module.scss';

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
          <div style={{ height: '74px' }} className="d-flex flex-row">
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
                'justify-space-between',
                classes.guideItemSubTitle,
                { [classes.guideItemSubTitleBlue]: variant === 'white' },
              )}
            >
              <p>{area}</p>
              <p>{validFrom}</p>
              <p>{validTo}</p>
            </div>
          )}
          {description && (
            <p
              className={classNames(classes.guideItemDescriptionText, {
                [classes.guideItemDescriptionTextBlue]: variant === 'white',
              })}
              style={{ height: '40px' }}
            >
              {description}
            </p>
          )}
          <Link to={buttonUrl} label={buttonText}>
            <Button
              variant="outline-yellow"
              text={buttonText}
              linkTitle={title}
              className={classNames(classes.guideItemBtn, {
                [classes.guideItemBtnBlue]: variant === 'white',
              })}
            />
          </Link>
        </div>
      </Col>
    </>
  );
};

export default GuideItem;
