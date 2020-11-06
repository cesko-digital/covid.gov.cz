import React from 'react';

interface Props {
  datetime: string;
  prefix?: string;
  suffix?: string;
}

const Time: React.FC<Props> = ({ datetime, prefix, suffix = ' ' }) => {
  return (
    <time dateTime={datetime}>
      {prefix}
      {new Date(datetime).toLocaleString('cs-CZ', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'CET',
      })}
      {suffix}
    </time>
  );
};

export default Time;
