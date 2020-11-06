import React from 'react';
import Button from '../button';

interface IProps {
  title: string;
  description: string;
  buttonUrl: string;
  varint: 'normal' | 'inverse';
  buttonText: string;
}

const GuideItem: React.FC<IProps> = ({
  title,
  description,
  buttonUrl,
  buttonText,
}) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 box">
        <div className="box__inner">
          <h3 className="box__title" style={{ height: '78px' }}>
            <a href="#" className="inverse">
              Odchod do&nbsp;starobního důchodu
            </a>
          </h3>
          <Button variant="outline-yellow" href={buttonUrl}>
            {buttonText}
          </Button>
          {/* <a href="#" className="btn btn-inverse btn--raw btn--more box__more">
            Rodina
          </a> */}
        </div>
      </div>
    </>
  );
};

export default GuideItem;
