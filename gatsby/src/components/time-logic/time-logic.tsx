export const isEndDateLessThanFiveDays = (date: string): boolean => {
  const endDate = new Date(date).getTime();
  const daysToCheck = 5 * 60 * 60 * 24 * 1000;

  if (date && endDate > Date.now() && endDate - Date.now() <= daysToCheck) {
    return true;
  } else if (
    date &&
    endDate < Date.now() &&
    Date.now() - endDate <= daysToCheck
  ) {
    return true;
  } else return false;
};

export const formatTimeHHMM = (
  datetime: string,
  timeConfig: {},
  displayTime: boolean,
): string => {
  if (displayTime === true) {
    let date = new Date(datetime).toLocaleTimeString('cs-CZ', timeConfig);

    if (date.length === 8) {
      date = date.substr(0, 5);
    }
    if (date.length === 7) {
      date = '0' + date;
      date = date.substr(0, 5);
    }
    return ' ' + `(${date})`;
  }
};
