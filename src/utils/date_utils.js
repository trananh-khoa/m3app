function convertToStandardTime(hours, minutes, seconds) {
  return `${addZeros(hours)}:${addZeros(minutes)}:${addZeros(seconds)}`;
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
function addZeros(value){
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
export function getDateFromUTC(utcSeconds) {
  return new Date(utcSeconds * 1000);
}

export function getDisplayDate(date) {
  const dateShortForm = `${date.getDate()}/${getMonthFromDate(date)}/${date.getFullYear()}`;
  const timeShortForm = convertToStandardTime(getHoursFromDate(date),getMinutesFromDate(date),getSecondsFromDate(date));
  return `${dateShortForm} | ${timeShortForm}`;
}
