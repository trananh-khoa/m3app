// const MERIDIEMS = {
//   AM: 'AM',
//   PM: 'PM',
// };

function getMonthFromDate(date) {
  return date.getMonth() + 1;
}

export function getDateFromUTC(utcSeconds) {
  return new Date(utcSeconds * 1000);
}

export function getDisplayDate(date) {
  const dateShortForm = `${date.getDate()}/${getMonthFromDate(date)}/${date.getFullYear()}`;
  const timeShortForm = 'use new function and pass it hours and minutes';
  console.log(dateShortForm);
  console.log(timeShortForm);
  // For Arushan
  // Extract Hour and Minute from date (Going to be 24 hour)
  // Make a function that converts this to XX:XX 'AM/PM' format
}
