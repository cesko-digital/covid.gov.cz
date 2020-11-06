import { Phone } from '@material-ui/icons';
import React from 'react';
import classes from './looking-for-something.module.scss';
import { ArrowForwardIos, Phone } from '@material-ui/icons';
import I18n from '@/components/i18n';

const LookingForSomething = () => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <header
          className={classes.header}
          dangerouslySetInnerHTML={{
            __html: I18n('still_searching_title'),
          }}
        />
        <ArrowForwardIos />
        <p className={classes.description}>
          {I18n('still_searching_description')}
        </p>
      </section>

      <hr className={classes.separator} />

      <section className={classes.section}>
        <Phone fontSize="large" className={classes.phoneIcon} />
        <header className={classes.header}>
          {I18n('call_title')}{' '}
          <strong>
            <a className={classes.phoneNumber} href="tel:1221">
              1221
            </a>
          </strong>
        </header>
        <p className={classes.description}>{I18n('call_description')}</p>
      </section>
    </div>
  );
};

export default LookingForSomething;
