const MERIDIEMS = {
  AM: 'AM',
  PM: 'PM',
};

function convertToStandardTime(hours, minutes) {
  return (hours > 12) ? `${hours - 12}:${minutes} ${MERIDIEMS.PM}` : `${hours}:${minutes} ${MERIDIEMS.AM}`;
}

function getHoursFromDate(date) {
  return date.getHours() + 1;
}

function getMinutesFromDate(date) {
  return date.getMinutes();
}

function getMonthFromDate(date) {
  return date.getMonth() + 1;
}

export function getDateFromUTC(utcSeconds) {
  return new Date(utcSeconds * 1000);
}

export function getDisplayDate(date) {
  const dateShortForm = `${date.getDate()}/${getMonthFromDate(date)}/${date.getFullYear()}`;
  const timeShortForm = convertToStandardTime(getMinutesFromDate(date), getHoursFromDate(date));
  return `${dateShortForm} | ${timeShortForm}`;
}
