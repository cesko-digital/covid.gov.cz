import React from 'react';
import classes from './looking-for-something.module.scss';
import { ArrowForwardIos, Phone } from '@material-ui/icons';

const LookingForSomething = () => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <header className={classes.header}>
          <strong>Stále</strong> hledáte?
        </header>
        <ArrowForwardIos />
        <p className={classes.description}>
          Nenašli jste odpověď v žádné kategorii, tématu ani častých otázkách?
        </p>
      </section>

      <hr className={classes.separator} />

      <section className={classes.section}>
        <Phone fontSize={'large'} className={classes.phoneIcon} />
        <header className={classes.header}>
          Volejte <strong><a className={classes.phoneNumber} href="tel:1221">1221</a></strong>
        </header>
        <p className={classes.description}>
          Pro urychlení si prosím připravte svůj konkrétní dotaz.
        </p>
      </section>
    </div>
  );
};

export default LookingForSomething;
