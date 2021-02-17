import { useCurrentLanguage } from '@/components/i18n';

const CZECH_DAYS_FROM_TO = [
  'pondělí ',
  'úterý ',
  'středy ',
  'čtvrtka ',
  'pátku ',
  'soboty ',
  'neděle ',
] as const;
const CZECH_DAYS_ON = [
  'pondělí ',
  'úterý ',
  'středu ',
  'čtvrtek ',
  'pátek ',
  'sobotu ',
  'neděli ',
] as const;

export type CzechDaysFromToKey = typeof CZECH_DAYS_FROM_TO[number];
export type CzechDaysOnKey = typeof CZECH_DAYS_ON[number];

export const useCurrentCzechDay = (
  datetime,
  usedForLastUpdatedCase,
): CzechDaysFromToKey | CzechDaysOnKey => {
  const currentLanguage = useCurrentLanguage();

  if (currentLanguage === 'cs') {
    if (usedForLastUpdatedCase === false) {
      if (datetime === 0) {
        return CZECH_DAYS_FROM_TO[6];
      } else if (datetime === 1) {
        return CZECH_DAYS_FROM_TO[0];
      } else if (datetime === 2) {
        return CZECH_DAYS_FROM_TO[1];
      } else if (datetime === 3) {
        return CZECH_DAYS_FROM_TO[2];
      } else if (datetime === 4) {
        return CZECH_DAYS_FROM_TO[3];
      } else if (datetime === 5) {
        return CZECH_DAYS_FROM_TO[4];
      } else return CZECH_DAYS_FROM_TO[5];
    } else {
      if (datetime === 0) {
        return CZECH_DAYS_ON[6];
      } else if (datetime === 1) {
        return CZECH_DAYS_ON[0];
      } else if (datetime === 2) {
        return CZECH_DAYS_ON[1];
      } else if (datetime === 3) {
        return CZECH_DAYS_ON[2];
      } else if (datetime === 4) {
        return CZECH_DAYS_ON[3];
      } else if (datetime === 5) {
        return CZECH_DAYS_ON[4];
      } else return CZECH_DAYS_ON[5];
    }
  }
};
