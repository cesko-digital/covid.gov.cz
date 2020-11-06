import React from 'react';
import Button from '../button';

interface IProps {
  title: string;
  description?: string;
  buttonUrl: string;
  varint?: 'normal' | 'inverse';
  buttonText: string;
}

const GuideItem: React.FC<IProps> = ({ title, buttonUrl, buttonText }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 box">
        <div className="box__inner">
          <h3 className="box__title" style={{ height: '78px' }}>
            <a href="#" className="inverse">
              {title}
            </a>
          </h3>
          <Button
            variant="outline-yellow"
            href={buttonUrl}
            text={buttonText}
            className="btn-inverse"
          />
        </div>
      </div>
    </>
  );
};

export default GuideItem;
