import React from 'react';
import Measure from './measure';

import styles from './measure-list.module.scss';
import Button from '@/components/button';

const MeasureList: React.FC = () => {
  return (
    <>
      <Measure
        title="Nosit roušky"
        description="Rouška se musí nosit venku až na pár"
        validity="od 2. října do 6. listopadu"
        area="Celá ČR"
      />
      <Measure
        title="Nosit roušky"
        description="Rouška se musí nosit venku až na pár"
        validity="od 2. října do 6. listopadu"
        area="Celá ČR"
      />
      <Measure
        title="Nosit roušky"
        description="Rouška se musí nosit venku až na pár"
        validity="od 2. října do 6. listopadu"
        area="Celá ČR"
      />
    </>
  );
};

export default MeasureList;
