import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import styles from './hello.module.scss';

export default function Hello() {
  return (
    <div className={styles.text}>
      <Trans i18nKey="greetings" />
    </div>
  );
}
