import { usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
  const allPottery = usePottery();
  let potteryHTML = "";

  for (const pottery of allPottery) {
    potteryHTML += `
      <div class="card-container">
        <div class="card">
            <section class="pottery" id="pottery--${pottery.id}">
            <div class="pottery_image"> 
            <img src="${pottery.image}" alt="${pottery.shape}"/>
            </div>
            <h2 class="pottery_shape">${pottery.shape}</h2>
          <ul class="itemsList">
            <li>Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height </li>
            <li class="pottery__price">Price is $${pottery.id}</li>
            </ul>
        </section>
        </div>
      </div>
            `;
  }
  return potteryHTML;
};

export const renderPotteryToDom = (potteryHTML) => {
  const listOfPottery = document.getElementById("PotteryList");
  if (listOfPottery) {
    listOfPottery.innerHTML = potteryHTML;
  } else {
    console.error('Could not find element with ID "PotteryList');
  }
};
