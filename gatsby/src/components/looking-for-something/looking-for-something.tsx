import { Phone } from '@material-ui/icons';
import React from 'react';
import classes from './looking-for-something.module.scss';

interface IProps {
  searchingHeader: string;
  searchingDescription: string;
  callHeader: string;
  callDescription: string;
}

const LookingForSomething: React.FC<IProps> = ({
  searchingHeader,
  searchingDescription,
  callHeader,
  callDescription,
}: IProps) => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <header className={classes.header}>{searchingHeader}</header>
        <p className={classes.description}>{searchingDescription}</p>
      </section>

      <hr className={classes.separator} />

      <section className={classes.section}>
        <Phone fontSize="large" className="mr-2" />
        <header className={classes.header}>
          {callHeader}
          &nbsp;<strong><a href="tel:1221">1121</a></strong>
        </header>
        <p className={classes.description}>{callDescription}</p>
      </section>
    </div>
  );
};

export default LookingForSomething;
