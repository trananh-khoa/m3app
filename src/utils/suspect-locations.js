import Data from '@/constants/data';
import getSuspectList from '@/utils/suspect-list';
import { getDateFromUTC, getDisplayDate } from '@/utils/date-utils';

const ROOM_DRAW = {
  L1_110: {
    x: 107, y: 98, width: 105, height: 166,
  },
  L1_100: {
    x: 216, y: 98, width: 160, height: 118,
  },
  L1_101: {
    x: 381, y: 98, width: 85, height: 15,
  },
  L1_151: {
    x: 381, y: 118, width: 85, height: 85,
  },
  L1_155: {
    x: 471, y: 98, width: 85, height: 105,
  },
  L1_ELEVATORS: {
    x: 260, y: 220, width: 76, height: 44,
  },
  L1_AP1_2: {
    x: 381, y: 208, width: 174, height: 55,
  },
  L1_150: {
    x: 562, y: 208, width: 39, height: 55,
  },
  L1_130: {
    x: 107, y: 269, width: 105, height: 104,
  },
  L1_105: {
    x: 216, y: 269, width: 160, height: 104,
  },
  L1_152: {
    x: 381, y: 269, width: 56, height: 104,
  },
  L1_154: {
    x: 442, y: 269, width: 56, height: 104,
  },
  L1_156: {
    x: 504, y: 269, width: 53, height: 49,
  },
  L1_156B: {
    x: 504, y: 323, width: 53, height: 49,
  },
  L2_210: {
    x: 107, y: 402, width: 71, height: 135,
  },
  L2_231: {
    x: 182, y: 402, width: 71, height: 80,
  },
  L2_233: {
    x: 257, y: 402, width: 71, height: 80,
  },
  L2_235: {
    x: 333, y: 402, width: 71, height: 80,
  },
  L2_241: {
    x: 409, y: 402, width: 71, height: 104,
  },
  L2_247: {
    x: 484, y: 402, width: 71, height: 104,
  },
  L2_220: {
    x: 107, y: 541, width: 71, height: 135,
  },
  L2_232: {
    x: 182, y: 598, width: 71, height: 78,
  },
  L2_234: {
    x: 256, y: 598, width: 80, height: 78,
  },
  L2_236: {
    x: 341, y: 598, width: 69, height: 78,
  },
  L2_244: {
    x: 414, y: 573, width: 68, height: 103,
  },
  L2_248: {
    x: 486, y: 573, width: 68, height: 103,
  },
  L2_AP2_1: {
    x: 182, y: 487, width: 72, height: 104,
  },
  L2_ELEVATORS: {
    x: 260, y: 525, width: 74, height: 43,
  },
  L2_AP2_3: {
    x: 342, y: 487, width: 61, height: 104,
  },
  L2_200: {
    x: 409, y: 512, width: 145, height: 56,
  },
  L2_250: {
    x: 562, y: 512, width: 39, height: 55,
  },
};

const DEVICE_TO_ROOM_MAPPING = {
  110: ['L1_100'],
  130: ['L1_130'],
  150: ['L1_150'],
  151: ['L1_151'],
  155: ['L1_155'],
  156: ['L1_156'],
  '156b': ['L1_156b'],
  210: ['L2_210'],
  220: ['L2_220'],
  231: ['L2_231'],
  232: ['L2_232'],
  233: ['L2_233'],
  235: ['L2_235'],
  241: ['L2_241'],
  244: ['L2_244'],
  248: ['L2_248'],
  250: ['L2_250'],
  'ap1-1': ['L1_110'],
  'ap1-2': ['L1_AP1_2'],
  'ap1-3': ['L1_105'],
  'ap1-4': ['L1_100'],
  'ap2-1': ['L2_AP2_1'],
  'ap2-2': ['L2_200'],
  'ap2-3': ['L2_AP2_3'],
  elevator: ['L1_ELEVATORS', 'L2_ELEVATORS'],
  'ice machine': ['L2_234'],
  lobby: ['L1_100'],
  reception: ['L1_100'],
  stairwell: ['L1-150', 'L2_250'],
};

export function getSuspectLocations(suspectData) {
  // Initialize return object
  const suspectLocationData = {};

  // Get information from suspect
  const suspectList = getSuspectList();
  suspectLocationData[suspectData.deviceID] = [suspectData.guestID];
  const usedSuspects = [suspectData.guestID];

  // Get valid range of time stamps
  const timeList = Object.keys(Data);
  const hrTimeList = timeList.map(time => getDisplayDate(getDateFromUTC(time)));
  const timeIndex = hrTimeList.findIndex(value => value === suspectData.date);

  // Find last location of all other suspects (TODO)
  suspectList.forEach((suspect) => {
    timeList.slice(0, timeIndex).reverse().forEach((time) => {
      const value = Data[time];
      if (!usedSuspects.includes(suspect) && value['guest-id'] === suspect) {
        usedSuspects.push(suspect);
        if (Array.isArray(suspectLocationData[value['device-id']])) {
          suspectLocationData[value['device-id']].push(value['guest-id']);
        } else {
          suspectLocationData[value['device-id']] = [value['guest-id']];
        }
      }
    });
  });

  return suspectLocationData;
}

export function buildRoomParameters(suspectLocationData, suspect) {
  const roomParams = {};
  Object.keys(suspectLocationData).forEach((device) => {
    DEVICE_TO_ROOM_MAPPING[device].forEach((room) => {
      if (Object.keys(roomParams).includes(room)) {
        roomParams[room].suspects.push(...suspectLocationData[device]);
      } else {
        roomParams[room] = {
          key: room,
          ...ROOM_DRAW[room],
          suspects: suspectLocationData[device],
        };
      }
      if (roomParams[room].suspects.includes(suspect)) {
        roomParams[room].isSuspect = true;
      }
    });
  });
  return roomParams;
}
