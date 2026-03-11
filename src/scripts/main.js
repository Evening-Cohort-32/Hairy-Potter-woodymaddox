import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";

const mug = makePottery("Mug", 2, 10);
const plate = makePottery("Plate,", 3, 12);
const teapot = makePottery("Teapot", 5, 11);
const vase = makePottery("Vase", 5, 8);
const planter = makePottery("Planter", 5, 11);

const firedMug = firePottery(mug, 2000);
const firedPlate = firePottery(plate, 2300);
const firedTeapot = firePottery(teapot, 2600);
const firedVase = firePottery(vase, 3000);
const firedPlanter = firePottery(planter, 1500);

console.log(mug);

console.log(firedMug);
console.log(firedPlate);
console.log(firedTeapot);
console.log(firedVase);
console.log(firedPlanter);
