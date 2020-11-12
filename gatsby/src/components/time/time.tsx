import React from 'react';

interface Props {
  datetime: string;
  displayTime?: boolean;
  prefix?: string;
  suffix?: string;
}

const Time: React.FC<Props> = ({
  datetime,
  displayTime,
  prefix,
  suffix = ' ',
}) => {
  const dateConfig = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: displayTime ? '2-digit' : undefined,
    minute: displayTime ? '2-digit' : undefined,
    timeZone: 'Europe/Prague',
  };
  return (
    <time dateTime={datetime}>
      {prefix}
      {new Date(datetime).toLocaleString('cs-CZ', dateConfig)}
      {suffix}
    </time>
  );
};

export default Time;
