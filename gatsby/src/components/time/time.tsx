import React from 'react';
import { useCurrentLanguage } from '@/components/i18n';
import { useCurrentCzechDay } from '../czech-days';
import {
  formatTimeHHMM,
  isEndDateLessThanFiveDays,
} from '../regions-time-logic/regions-time-logic';

interface Props {
  datetime: string;
  displayTime?: boolean;
  prefix?: string;
  suffix?: string;
  displayLastUpdatedCzDays?: boolean;
  displayShorterDate?: boolean;
  displayShortMonth?: boolean;
}

const Time: React.FC<Props> = ({
  datetime,
  displayTime,
  prefix,
  suffix = ' ',
  displayLastUpdatedCzDays = false,
  displayShorterDate = false,
  displayShortMonth = false,
}) => {
  const currentLanguage = useCurrentLanguage();
  const dateConfig = {
    year: 'numeric',
    month: displayShortMonth ? 'numeric' : 'long',
    day: 'numeric',
    timeZone: 'Europe/Prague',
  };
  const dateConfigEn = {
    ...dateConfig,
    weekday: displayShorterDate ? undefined : 'long',
  };
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
          {formatTimeHHMM(datetime, timeConfig)}
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
            displayShorterDate,
          )}
          {new Date(datetime).toLocaleString('cs-CZ', dateConfig)}
          {formatTimeHHMM(datetime, timeConfig)}
          {suffix}
        </time>
      )}
    </div>
  );
};

export default Time;
