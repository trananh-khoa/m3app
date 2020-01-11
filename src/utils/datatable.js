export default function (json) {
  const dataTableJSON = [];
  json.forEach((key, value) => {
    dataTableJSON.push({
      date: key,
      guestID: value['guest-id'],
      device: value.device,
      deviceID: value['device-id'],
      event: value.event,
    });
  });
}
