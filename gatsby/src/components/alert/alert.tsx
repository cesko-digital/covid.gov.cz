import React from 'react';
import Button from '../button';
import GovIcon from '../gov-icon';
import Row from '../row';
import Col from '../col';

import { useTranslation } from 'react-i18next';

interface IProps {
  message: string;
  startBy: number;
  endBy?: number;
  to?: string;
}

const Alert: React.FC<IProps> = ({
  message = 'Probíhá aktualizace dat, prosím, berte na vědomí, že data nemusí být aktuální všude.',
  startBy = Date.now(),
  endBy,
  to,
}) => {
  const { t } = useTranslation();
  if (
    (startBy && startBy <= Date.now() && endBy >= Date.now()) ||
    (startBy && !endBy)
  )
    return (
      <>
        <Row
          className="w-100 m-0 bg-warning text-black"
          justify="center"
          alignItems="center"
        >
          <Col col={11} colMd={6}>
            <div className="d-flex align-items-center justify-content-center py-1">
              <GovIcon icon="alert" size={20} />
              <span className="ml-2">{message}</span>
              {to != null ? (
                <Button variant="small-black" text={t('btn_more')} href={to} />
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
