const storePottery = [];

export const toSellOrNotToSell = (potteryObject) => {
  if (!potteryObject.cracked) {
    if (potteryObject.weight >= 6) {
      potteryObject.price = 40;
    } else {
      potteryObject.price = 20;
    }

    storePottery.push(potteryObject);
  }
  return potteryObject;
};

export const usePottery = () => {
  return structuredClone(storePottery);
};
