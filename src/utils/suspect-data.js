import Data from '@/constants/data';

export default function (suspect) {
  const keys = Object.keys(Data);
  const suspectData = {};

  keys.forEach((key) => {
    if (Data[key]['guest-id'] === suspect) {
      suspectData[key] = { ...Data[key] };
      delete suspectData[key]['guest-id'];
    }
  });

  return suspectData;
}
