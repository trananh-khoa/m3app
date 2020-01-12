import Data from '@/constants/data';

export default function () {
  const suspectList = [];
  const dataKeys = Object.keys(Data);

  dataKeys.forEach((key) => {
    const guest = Data[key]['guest-id'];
    if (!(suspectList.includes(guest))) {
      suspectList.push(guest);
    }
  });

  return suspectList.sort();
}
