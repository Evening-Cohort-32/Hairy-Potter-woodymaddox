//Function that takes two inputs , potteryItem and temp.

export const firePottery = (potteryItem, temp) => {
  potteryItem.fired = true; //adds the property of fired to the object

  if (temp > 2200) {
    // Checks to see if the temp is over 2200
    potteryItem.cracked = true; //if its too hot it marks it as cracked
  } else if (temp <= 2200) {
    //else if the temp is less than 2200 it marks it as not cracked
    potteryItem.cracked = false;
  }

  return potteryItem; //Sends the updated object back
};
