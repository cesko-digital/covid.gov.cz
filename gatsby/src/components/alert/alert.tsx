import React from 'react';
import Button from '../button';
import GovIcon from '../gov-icon';

import styles from './alert.module.scss';

interface IProps {
  message: string;
  link?: string;
  isInfo?: boolean;
}

const Alert: React.FC<IProps> = ({ message = '', isInfo, link }) => {
  return (
    <div className={styles.wrapper}>
      <GovIcon icon={isInfo ? 'time' : 'alert'} />
      <span className="ml-1" dangerouslySetInnerHTML={{ __html: message }} />
      {link && <Button variant="small-black" text="Více" href={link} />}
    </div>
  );
};

export default Alert;
