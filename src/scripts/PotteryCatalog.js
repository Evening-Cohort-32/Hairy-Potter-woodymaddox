const storePottery = []; //create a empty array to store the object

export const toSellOrNotToSell = (potteryObject) => {
  if (!potteryObject.cracked) {
    //Checks if the pottery is not cracked. If it is cracked, the code skips everything inside the curly brackets
    if (potteryObject.weight >= 6) {
      //If the item isn't cracked, it checks the weight. Is it 6 or heavier
      potteryObject.price = 40; //If it is heavy (6+), it adds a price property of 40 to the object
    } else {
      potteryObject.price = 20; //If the weight is less than 6 it adds a price property of 20 to the object instead
    }

    storePottery.push(potteryObject); //pushes the item to the storePottery array
  }
  return potteryObject; //sends the finished object to where the function is called
};

export const usePottery = () => {
  return structuredClone(storePottery); //exports a (deep copy) of the inventory
};

//*** structuredClone is a built-in method used to create a deep copy of an object or array.It allows other parts of your app to read the inventory without giving them the power to break the inventory */
