import React from 'react';
import Alert from './alert';

// TODO: Add real dataset

interface IProps {
  alerts?: INotice[];
}

interface INotice {
  content: string;
  from: Date;
  to?: Date;
  link?: string;
}

const alerts: INotice[] = [
  {
    content: 'Nemocnice kolabují jako funkce ministra zdravotnictví!',
    from: new Date(),
    link: '#',
  },
];

const isDateBetween = (from: Date, to?: Date): boolean => {
  const now = new Date();
  return (from <= now && now <= to) || (from <= now && !to);
};

const AlertContaner: React.FC<IProps> = () => {
  const active = alerts.filter(({ from, to }) => isDateBetween(from, to));
  return (
    <>
      {active.map((notice, i) => (
        <Alert
          key={`notice-box-${i}`}
          message="{notice.content}"
          link={notice.link}
        />
      ))}
    </>
  );
};

export default AlertContaner;
