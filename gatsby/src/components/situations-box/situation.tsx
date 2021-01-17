import React from 'react';
import Link from '@/components/link';
import { KeyboardArrowRight } from '@material-ui/icons';
import styles from './situation.module.scss';
import { IArea } from '@graphql-types';
import ContentIcon from '@/components/content-icon/content-icon';

interface Props {
  situation: IArea;
}

const Situation: React.FC<Props> = ({ situation }) => {
  const { name, path } = situation;
  const iconCode = situation?.relationships?.icon?.code;

  return (
    <Link to={path.alias} className={styles.situation} noExternalClass>
      <span className={styles.situationTitle}>
        <ContentIcon className={styles.situationTitleIcon} code={iconCode} />
        {name}
      </span>
      <KeyboardArrowRight style={{ fontSize: 16 }} className="color-yellow" />
    </Link>
  );
};

export default Situation;
