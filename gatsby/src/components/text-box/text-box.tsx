import React from 'react';

import styles from './text-box.module.scss';
import Link from '@/components/link';

const TextBox: React.FC = () => {
  return (
    <div className={styles.textBox}>
      <h2>Headline #2</h2>
      <h3>Headline #3</h3>
      <p>
        Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur id consectetur lorem. Nullam eu aliquam nibh. Vestibulum
        varius orci vitae risus sollicitudin, et elementum libero ultricies.
        Integer pretium malesuada magna, vitae facilisis risus tincidunt ac.
        Donec posuere diam eget eros viverra vestibulum.
      </p>
      <h3>Links</h3>
      <p>
        <Link label="External" to="https://search.seznam.cz" />
      </p>
      <p>
        <Link label="Internal" to="/" />
      </p>
      <p><em>Italic paragraph last updated 1 hour ago</em></p>
    </div>
  );
};

export default TextBox;
