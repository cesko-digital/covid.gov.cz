import React from 'react';
import Link from '@/components/link';
import MdIcon from '@/components/md-icon';
import Icon from '@/components/icon';
import styles from './situation.module.scss';
import { IArea } from 'graphql-types';

interface Props {
  situation: IArea;
}

const Situation: React.FC<Props> = ({ situation }) => {
  const { name, path, relationships } = situation;
  return (
    <Link to={path.alias} className={styles.situation}>
      <span className={styles.situationTitle}>
        <Icon
          icon={
            relationships.field_ref_icon
              ? relationships.field_ref_icon.code
              : 'chevron_right'
          }
          family={
            relationships.field_ref_icon
              ? relationships.field_ref_icon.source
              : 'materialicon'
          }
          size={24}
          className={styles.situationTitleIcon}
        />
        {name}
      </span>
      <MdIcon icon="keyboard_arrow_right" size={16} className="color-yellow" />
    </Link>
  );
};

export default Situation;
