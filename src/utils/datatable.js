import { getDateFromUTC, getDisplayDate } from '@/utils/date-utils';

export default function (json) {
  const dataTableJSON = [];
  const dataKeys = Object.keys(json);

  dataKeys.forEach((key) => {
    const value = json[key];
    dataTableJSON.push({
      date: getDisplayDate(getDateFromUTC(key)),
      guestID: value['guest-id'],
      device: value.device,
      deviceID: value['device-id'],
      event: value.event,
    });
  });

  return dataTableJSON;
}
