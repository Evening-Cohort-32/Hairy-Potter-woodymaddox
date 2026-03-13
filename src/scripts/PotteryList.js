import { usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
  const allPottery = usePottery(); //Gets the list un cracked, priced pottery
  let potteryHTML = ""; //Empty string to hold the HTML

  for (const pottery of allPottery) {
    //It loops through every piece of pottery in the list one by one.For each item it generates the html card.
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
  return potteryHTML; //Once the loop is done it returns one big string with all the HTML cards
};

export const renderPotteryToDom = (potteryHTML) => {
  const listOfPottery = document.getElementById("PotteryList"); //looks in index.html for "PotteryList"
  if (listOfPottery) {
    listOfPottery.innerHTML = potteryHTML; //Injects the html cards into that spot on the page
  } else {
    console.error('Could not find element with ID "PotteryList'); //if it cant find the Id in the html file it consoles a error
  }
};
