import { useCurrentLanguage } from '@/components/i18n';

export const isEndDateLessThanFiveDays = (date: string): boolean => {
  const endDate = new Date(date).getTime();
  const daysToCheck = 5 * 60 * 60 * 24 * 1000;

  if (date && endDate > Date.now()) {
    if (endDate - Date.now() < daysToCheck) {
      return true;
    } else return false;
  } else return false;
};

export const isAllCzechRegions = (regions: string[]): boolean => {
  const currentLanguage = useCurrentLanguage();

  if (regions && regions.length) {
    let isAllCzechRegions = false;
    for (let i = 0; i < regions.length; i++) {
      const region = regions[i];
      if (currentLanguage === 'en' && region.includes('Czechia')) {
        isAllCzechRegions = true;
      } else if (currentLanguage === 'cs' && region.includes('ČR')) {
        isAllCzechRegions = true;
      } else {
        isAllCzechRegions = false;
      }
    }
    return isAllCzechRegions;
  }
};

export const isAllCzechArea = (area: string): boolean => {
  const currentLanguage = useCurrentLanguage();

  if (currentLanguage === 'en' && area && area.includes('Czechia')) {
    return true;
  } else if (currentLanguage === 'cs' && area && area.includes('ČR')) {
    return true;
  } else return false;
};
