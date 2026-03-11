import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList, renderPotteryToDom } from "./PotteryList.js";

const mug = makePottery("Mug", 2, 10, "images/Mug.jpeg");
const plate = makePottery("Plate", 3, 12, "images/Plate.jpeg");
const teapot = makePottery("Teapot", 5, 11, "images/Teapot.jpeg");
const vase = makePottery("Vase", 5, 8, "images/Vase.jpeg");
const planter = makePottery("Planter", 5, 11, "images/Planter.jpeg");

const firedMug = firePottery(mug, 2000);
const firedPlate = firePottery(plate, 2100);
const firedTeapot = firePottery(teapot, 2600);
const firedVase = firePottery(vase, 3000);
const firedPlanter = firePottery(planter, 1500);

toSellOrNotToSell(mug);
toSellOrNotToSell(plate);
toSellOrNotToSell(teapot);
toSellOrNotToSell(vase);
toSellOrNotToSell(planter);

const potteryHTML = PotteryList();
renderPotteryToDom(potteryHTML);

console.log(firedMug);
console.log(firedPlate);
console.log(firedTeapot);
console.log(firedVase);
console.log(firedPlanter);
