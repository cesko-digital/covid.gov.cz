import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Add, Clear } from '@material-ui/icons';

import styles from './accordion-section.module.scss';
import Button from '@/components/button';

export interface Section {
  title: string;
  text: string;
}

const AccordionSection: React.FC<Section> = ({ title, text }) => {
  const [opened, setOpened] = useState(false);

  const toggleSection = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return (
    <div className={styles.section}>
      <div
        className={classNames(
          styles.sectionHeading,
          'd-flex',
          'justify-content-between',
          'align-items-center',
        )}
      >
        {title}
        <Button
          icon={opened ? <Clear /> : <Add />}
          className={classNames(
            styles.sectionButton,
            'd-flex',
            'justify-content-center',
            'align-items-center',
          )}
          onClick={toggleSection}
          variant="yellow"
        />
      </div>
      {opened && <div className={styles.sectionContent}>{text}</div>}
    </div>
  );
};

export default AccordionSection;
