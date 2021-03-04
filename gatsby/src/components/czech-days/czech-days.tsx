import { useCurrentLanguage } from '@/components/i18n';

const CZECH_DAYS_FROM_TO = [
  'neděle ',
  'pondělí ',
  'úterý ',
  'středy ',
  'čtvrtka ',
  'pátku ',
  'soboty ',
] as const;
const CZECH_DAYS_ON = [
  'neděli ',
  'pondělí ',
  'úterý ',
  'středu ',
  'čtvrtek ',
  'pátek ',
  'sobotu ',
] as const;

export type CzechDaysFromToKey = typeof CZECH_DAYS_FROM_TO[number];
export type CzechDaysOnKey = typeof CZECH_DAYS_ON[number];

export const useCurrentCzechDay = (
  datetime: number,
  usedForOnDayCase: boolean,
  isShownShorterDate: boolean,
): CzechDaysFromToKey | CzechDaysOnKey => {
  const currentLanguage = useCurrentLanguage();

  if (currentLanguage === 'cs' && isShownShorterDate === false) {
    return usedForOnDayCase === false
      ? CZECH_DAYS_FROM_TO[datetime]
      : CZECH_DAYS_ON[datetime];
  }
};
