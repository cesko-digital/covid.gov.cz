import React from 'react';
import Situation from '@/components/situations-box/situation';
import styles from './situations-box.module.scss';
import { ISituation } from '@graphql-types';

interface IProps {
  situations: ISituation[];
}

const SituationsBox: React.FC<IProps> = ({ situations }) => {
  return (
    <div className={styles.situations}>
      {situations.map((situation) => (
        <Situation situation={situation} key={`situation-${situation.id}`} />
      ))}
    </div>
  );
};

export default SituationsBox;
