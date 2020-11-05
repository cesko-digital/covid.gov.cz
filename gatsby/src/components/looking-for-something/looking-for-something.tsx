import React from 'react';
import classes from './looking-for-something.module.scss';
import MdIcon from '@/components/md-icon';

const defaultValues = {
  searchingHeader: (
    <>
      <strong>Stále</strong> hledáte?
    </>
  ),
  searchingDescription:
    'Nenašli jste odpověď v žádné kategorii, tématu ani častých otázkách?',
  callHeader: (
    <>
      Volejte{' '}
      <strong>
        <a className={classes.phoneNumber} href="tel:1221">
          1221
        </a>
      </strong>
    </>
  ),
  callDescription: 'Pro urychlení si prosím připravte svůj konkrétní dotaz.',
};

type Props = Partial<typeof defaultValues>;

const LookingForSomething = ({
  searchingHeader = defaultValues.searchingHeader,
  searchingDescription = defaultValues.searchingDescription,
  callHeader = defaultValues.callHeader,
  callDescription = defaultValues.callDescription,
}: Props) => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <header className={classes.header}>{searchingHeader}</header>
        <p className={classes.description}>{searchingDescription}</p>
      </section>

      <hr className={classes.separator} />

      <section className={classes.section}>
        <MdIcon icon="phone" size={32} className={classes.phoneIcon} />
        <header className={classes.header}>{callHeader}</header>
        <p className={classes.description}>{callDescription}</p>
      </section>
    </div>
  );
};

export default LookingForSomething;
