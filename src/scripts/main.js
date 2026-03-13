import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList, renderPotteryToDom } from "./PotteryList.js";

//makePottery function is called five times to create five different objects by passing in  the ids for the Mug, Plate, Teapot, Vase, Planter.

const mug = makePottery("Mug", 2, 10, "images/Mug.jpeg");
const plate = makePottery("Plate", 3, 12, "images/Plate.jpeg");
const teapot = makePottery("Teapot", 5, 11, "images/Teapot.jpeg");
const vase = makePottery("Vase", 5, 8, "images/Vase.jpeg");
const planter = makePottery("Planter", 5, 11, "images/Planter.jpeg");

//Each item is passed into the firePottery function to mark them as cracked or not cracked depending on the temp passed in

const firedMug = firePottery(mug, 2000);
const firedPlate = firePottery(plate, 2100);
const firedTeapot = firePottery(teapot, 2600);
const firedVase = firePottery(vase, 3000);
const firedPlanter = firePottery(planter, 1500);

//Each item is passed through the toSellOrNotToSell function. If its not cracked it adds the price and adds it to the storePottery array

toSellOrNotToSell(mug);
toSellOrNotToSell(plate);
toSellOrNotToSell(teapot);
toSellOrNotToSell(vase);
toSellOrNotToSell(planter);

const potteryHTML = PotteryList(); //generates the HTML string for all the items currently in the "Sellable" inventory.
renderPotteryToDom(potteryHTML); //takes that HTML and actually puts it onto the webpage for people to see.

console.log(firedMug);
console.log(firedPlate);
console.log(firedTeapot);
console.log(firedVase);
console.log(firedPlanter);
