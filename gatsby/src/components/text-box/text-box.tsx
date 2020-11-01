import React from 'react';

import styles from './text-box.module.scss';
import Link from '@/components/link';
import Row from '@/components/row';
import Col from '@/components/col';

const TextBox: React.FC = () => {
  return (
    <Row className={styles.textBox}>
      <Col colLg={8}>
        <h2>Headline #2</h2>
        <h3>Headline #3</h3>
        <p>
          Paragraph Konání divadelních a jiných uměleckých představení je zakázáno. Toto omezení platí pro představení uvnitř i venku. Nevztahuje se však na zkoušky, které je možné konat. Nutné je ovšem dodržet zákaz zpěvu více než 5 osob ve vnitřních prostorách. Důvodem je, že zpěv je z hlediska šíření viru silně rizikový a dochází při něm k velkému šíření kapének.
        </p>
        <p>
          Tento zákaz významně zasáhl do ekonomické situace divadel, herců a dalšího personálu. Tento zásah mají zmírnit kompenzace dopadů opatření (Odkaz okruh Kompenzace)
        </p>
        <p>
          Provoz divadel je zakázán usnesením vlády č. 1103 (https://www.vlada.cz/assets/media-centrum/aktualne/zakaz-maloobchodu-a-sluzeb-1103.pdf) a usnesením č. 1108, které prodlužuje platnost usnesení č. 1103 do 20. listopadu (https://www.vlada.cz/assets/media-centrum/aktualne/nouzovy-stav-1108.pdf)
        </p>
        <p><em>Italic paragraph last updated 1 hour ago</em></p>
      </Col>
      <Col colLg={4}>
        <h2>Links</h2>
        <p>
          <Link label="External" to="https://search.seznam.cz" />
        </p>
        <p>
          <Link label="Internal" to="/" />
        </p>
        <h2>Odkazy a zdroje</h2>
        <p>
          <Link label="www.szu.cz/hygiena" to="https://www.szu.cz/hygiena" />
        </p>
        <p>
          <Link label="www.vlada.cz" to="https://vlada.cz" />
        </p>
        <p>
          <Link label="www.portalcovid.cz" to="https://portalcovid.cz" />
        </p>
      </Col>
    </Row>
  );
};

export default TextBox;
