let potteryId = 1; //Setup the counter. Each time pottery is made it gets a unique id number that goes up by one

export const makePottery = (shape, weight, height, image) => {
  const madePottery = {
    //creates a new pottery object with id , shape, weight, height, image
    id: potteryId,
    shape: shape,
    weight: weight,
    height: height,
    image: image,
  };

  potteryId++; //increases the counter so the next piece of pottery gets the next number

  return madePottery; // hands back the finished object
};
