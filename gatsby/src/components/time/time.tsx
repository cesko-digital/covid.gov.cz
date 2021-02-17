import React from 'react';
import { useCurrentLanguage } from '@/components/i18n';
import { useCurrentCzechDay } from '../czech-days';
import { isEndDateLessThanFiveDays } from '../regions-time-logic/regions-time-logic';

interface Props {
  datetime: string;
  displayTime?: boolean;
  prefix?: string;
  suffix?: string;
  displayLastUpdatedCzDays?: boolean;
}

const Time: React.FC<Props> = ({
  datetime,
  displayTime,
  prefix,
  suffix = ' ',
  displayLastUpdatedCzDays = false,
}) => {
  const currentLanguage = useCurrentLanguage();
  const dateConfig = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Prague',
  };
  const dateConfigEn = { ...dateConfig, weekday: 'long' };
  const timeConfig = {
    hour: displayTime ? '2-digit' : undefined,
    minute: displayTime ? '2-digit' : undefined,
  };
  return (
    <div>
      {currentLanguage === 'en' ? (
        <time
          dateTime={datetime}
          className={
            isEndDateLessThanFiveDays(datetime)
              ? 'font-weight-medium'
              : 'font-weight-normal'
          }
        >
          {prefix.toLocaleLowerCase()}
          {new Date(datetime).toLocaleString('en-US', dateConfigEn)}
          {' (' + new Date(datetime).toLocaleString('en-US', timeConfig) + ')'}
          {suffix}
        </time>
      ) : (
        <time
          dateTime={datetime}
          className={
            isEndDateLessThanFiveDays(datetime)
              ? 'font-weight-medium'
              : 'font-weight-normal'
          }
        >
          {prefix.toLocaleLowerCase()}
          {useCurrentCzechDay(
            new Date(datetime).getDay(),
            displayLastUpdatedCzDays,
          )}
          {new Date(datetime).toLocaleString('cs-CZ', dateConfig)}
          {' (' + new Date(datetime).toLocaleString('cs-CZ', timeConfig) + ')'}
          {suffix}
        </time>
      )}
    </div>
  );
};

export default Time;
