let potteryId = 1;

export const makePottery = (shape, weight, height) => {
  const madePottery = {
    id: potteryId,
    shape: shape,
    weight: weight,
    height,
  };

  potteryId++;

  return madePottery;
};
