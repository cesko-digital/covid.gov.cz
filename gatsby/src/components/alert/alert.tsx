import React from 'react';
import Button from '../button';
import GovIcon from '../gov-icon';
import Row from '../row';
import Col from '../col';

interface IProps {
  message: string;
  link?: string;
  isInfo: boolean;
}

const Alert: React.FC<IProps> = ({
  message = 'Probíhá aktualizace dat, prosím, berte na vědomí, že data nemusí být aktuální všude.',
  isInfo,
  link,
}) => {
  return (
    <>
      <Row
        className={
          isInfo
            ? 'bg-primary w-100 m-0 text-white'
            : 'bg-warning w-100 m-0 text-black'
        }
        justify="center"
        alignItems="center"
      >
        <Col col={11} colMd={9} colLg={6}>
          <div className="d-flex align-items-center justify-content-center py-2">
            <GovIcon icon={isInfo ? 'time' : 'alert'} size={20} />
            <span
              className="ml-2"
              dangerouslySetInnerHTML={{ __html: message }}
            />
            {link != null ? (
              <Button variant="small-black" text="Více" href={link} />
            ) : (
              <></>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Alert;
