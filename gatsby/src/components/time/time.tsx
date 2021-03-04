import React from 'react';
import { useCurrentLanguage } from '@/components/i18n';
import { useCurrentCzechDay } from '../czech-days';
import {
  formatTimeHHMM,
  isEndDateLessThanFiveDays,
} from '../time-logic/time-logic';

interface Props {
  datetime: string;
  displayTime?: boolean;
  prefix?: string;
  suffix?: string;
  displayOnCzDayCase?: boolean;
  displayShortDate?: boolean;
}

const Time: React.FC<Props> = ({
  datetime,
  displayTime,
  prefix,
  suffix = ' ',
  displayOnCzDayCase = false,
  displayShortDate = false,
}) => {
  const currentLanguage = useCurrentLanguage();
  const dateConfig = {
    year: 'numeric',
    month: displayShortDate ? 'short' : 'long',
    day: 'numeric',
    timeZone: 'Europe/Prague',
  };
  const dateConfigEn = {
    ...dateConfig,
    weekday: displayShortDate ? undefined : 'long',
  };
  const timeConfig = {
    hour: displayTime ? '2-digit' : undefined,
    minute: displayTime ? '2-digit' : undefined,
  };
  return (
    <span>
      {currentLanguage === 'en' ? (
        <time
          dateTime={datetime}
          className={
            isEndDateLessThanFiveDays(datetime)
              ? 'font-weight-medium'
              : 'font-weight-normal'
          }
        >
          {prefix?.toLocaleLowerCase()}
          {new Date(datetime).toLocaleString('en-US', dateConfigEn)}
          {formatTimeHHMM(datetime, timeConfig, displayTime)}
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
          {prefix?.toLocaleLowerCase()}
          {useCurrentCzechDay(
            new Date(datetime).getDay(),
            displayOnCzDayCase,
            displayShortDate,
          )}
          {new Date(datetime).toLocaleString('cs-CZ', dateConfig)}
          {formatTimeHHMM(datetime, timeConfig, displayTime)}
          {suffix}
        </time>
      )}
    </span>
  );
};

export default Time;
