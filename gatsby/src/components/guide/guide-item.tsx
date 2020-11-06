import classNames from 'classnames';
import React from 'react';
import Button from '../button';
import Col from '../col';
import ContentIcon from '../content-icon';
import classes from './guide-item.module.scss';

interface IProps {
  title: string;
  description?: string;
  buttonUrl: string;
  variant?: 'white' | 'blue';
  buttonText: string;
  iconCode?: string;
}

const GuideItem: React.FC<IProps> = ({
  title,
  buttonUrl,
  buttonText,
  iconCode,
  variant,
  description,
}) => {
  return (
    <>
      <Col col={12} colSm={6} colLg={4} className="box">
        <div className="box__inner">
          <h3
            className={classNames(classes.title, {
              [classes.titleBlue]: variant === 'white',
            })}
            style={{ height: '78px' }}
          >
            {iconCode && <ContentIcon code={iconCode} />}

            {title}
          </h3>
          {description && (
            <p
              className={classNames(classes.descriptionText, {
                [classes.descriptionTextBlue]: variant === 'white',
              })}
            >
              {description}
            </p>
          )}
          <Button
            variant="outline-yellow"
            href={buttonUrl}
            text={buttonText}
            className={classNames(classes.title, {
              [classes.titleBlue]: variant === 'white',
            })}
          />
        </div>
      </Col>
    </>
  );
};

export default GuideItem;
