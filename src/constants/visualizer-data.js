// Get a list of all the suspects (including N/A)
// Loop through the JavaScript Object and get all unique Guest IDs and export an array
import SuspectDataList from '@/constants/data.js' 

export function getGuestList(){
    const suspectList = [];
    const listKeys = Object.keys(SuspectDataList);
   
    listKeys.forEach((key) => {
        const guest = SuspectDataList[key]['guest-id'];
        if(!(suspectList.includes(guest))){
            suspectList.push({
                guestID: guest,
            });
        }
      });
}