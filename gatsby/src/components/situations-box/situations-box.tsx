import React from 'react';
import Situation from '@/components/situations-box/situation';
import styles from './situations-box.module.scss';
import { ISituation } from 'graphql-types';
import useMobile from '@/hooks/useMobile';

interface IProps {
  situations: ISituation[];
}

const SituationsBox: React.FC<IProps> = ({ situations }) => {
  const isMobile = useMobile();

  const maxItems = isMobile ? 3 : 6;
  return (
    <div className={styles.situations}>
      {situations.slice(0, maxItems).map((situation, i) => (
        <Situation situation={situation} key={`situation-${situation.id}`} />
      ))}
    </div>
  );
};

export default SituationsBox;
