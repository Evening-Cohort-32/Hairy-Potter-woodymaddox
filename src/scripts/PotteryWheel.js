let potteryId = 1;

export const makePottery = (shape, weight, height, image) => {
  const madePottery = {
    id: potteryId,
    shape: shape,
    weight: weight,
    height: height,
    image: image,
  };

  potteryId++;

  return madePottery;
};
