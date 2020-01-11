function padWithZeros(value) {
  return (value < 10) ? `0${value}` : value;
}

function convertToStandardTime(hours, minutes, seconds) {
  return `${padWithZeros(hours)}:${padWithZeros(minutes)}:${padWithZeros(seconds)}`;
}

function getHoursFromDate(date) {
  return date.getHours() + 1;
}

function getMinutesFromDate(date) {
  return date.getMinutes();
}

function getSecondsFromDate(date) {
  return date.getSeconds();
}

function getMonthFromDate(date) {
  return date.getMonth() + 1;
}

export function getDateFromUTC(utcSeconds) {
  return new Date(utcSeconds * 1000);
}

export function getDisplayDate(date) {
  const dateShortForm = `${padWithZeros(date.getDate())}/${padWithZeros(getMonthFromDate(date))}/${padWithZeros(date.getFullYear())}`;
  const timeShortForm = convertToStandardTime(
    getHoursFromDate(date),
    getMinutesFromDate(date),
    getSecondsFromDate(date),
  );
  return `${dateShortForm} | ${timeShortForm}`;
}
