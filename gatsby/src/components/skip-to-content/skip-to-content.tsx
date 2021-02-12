import React from 'react';

import styles from './skip-to-content.module.scss';

interface IProps {
  message: string;
  link: string;
}

const SkipToContent: React.FC<IProps> = ({ message = '', link }) => {
  return (
    <a
      className={styles.skipLink}
      href={link}
      dangerouslySetInnerHTML={{ __html: message }}
    />
  );
};

export default SkipToContent;
