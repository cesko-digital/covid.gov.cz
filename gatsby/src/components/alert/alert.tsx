import React from 'react';
import Button from '../button';
import GovIcon from '../gov-icon';
import Row from '../row';
import Col from '../col';

import { useTranslation } from 'gatsby-plugin-react-i18next';

interface IProps {
  message: string;
  link?: string;
}

const Alert: React.FC<IProps> = ({
  message = 'Probíhá aktualizace dat, prosím, berte na vědomí, že data nemusí být aktuální všude.',
  link,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Row
        className="w-100 m-0 bg-warning text-black"
        justify="center"
        alignItems="center"
      >
        <Col col={11} colMd={9} colLg={6}>
          <div className="d-flex align-items-center justify-content-center py-1">
            <GovIcon icon="alert" size={20} />
            <span className="ml-2">{message}</span>
            {link != null ? (
              <Button variant="small-black" text={t('Více')} href={link} />
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
