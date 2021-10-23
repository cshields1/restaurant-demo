import loadNavbar from "./navbar";
import PeanutButterBaconBites from '../assets/peanut-butter-bacon-bites.jpeg';
import TunaAppleSalad from '../assets/tuna-apple-salad.jpeg';
import CheesyChickenPizza from '../assets/cheesy-chicken-pizza.jpeg';
import PeanutButterBananaIceCream from '../assets/peanut-butter-banana-ice-cream.jpeg';

const loadMenu = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const menu = document.createElement('div');
  menu.id = "menu"

  const snack = document.createElement('div');
  const snackName = document.createElement('h2');
  snackName.textContent = "Peanut Butter Bacon Bites";
  const snackImage = new Image();
  snackImage.src = PeanutButterBaconBites;
  const snackInfo = document.createElement('p');
  snackInfo.textContent = "Salt and umami collide in these chewy, hot-out-of-the-oven delights.";
  snack.append(snackName, snackImage, snackInfo);

  const salad = document.createElement('div');
  const saladName = document.createElement('h2');
  saladName.textContent = "Tuna and Apple Refresh";
  const saladImage = new Image();
  saladImage.src = TunaAppleSalad;
  const saladInfo = document.createElement('p');
  saladInfo.textContent = "Add the zest your day is missing beside the comfort of an old favorite.";
  salad.append(saladName, saladImage, saladInfo);

  const pizza = document.createElement('div');
  const pizzaName = document.createElement('h2');
  pizzaName.textContent = "Cheesy Chicken Deluxe";
  const pizzaImage = new Image();
  pizzaImage.src = CheesyChickenPizza;
  const pizzaInfo = document.createElement('p');
  pizzaInfo.textContent = "Our signature pie, topped with juicy chicken and mountains of melted cheese.";
  pizza.append(pizzaName, pizzaImage, pizzaInfo);

  const dessert = document.createElement('div');
  const dessertName = document.createElement('h2');
  dessertName.textContent = "Chuggy Freeze";
  const dessertImage = new Image();
  dessertImage.src = PeanutButterBananaIceCream;
  const dessertInfo = document.createElement('p');
  dessertInfo.textContent = "The perfect topper on any party. Ask about the birthday cup!";
  dessert.append(dessertName, dessertImage, dessertInfo);

  const signature = document.createElement('span')
  signature.innerHTML = "Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>."

  menu.append(snack,salad,pizza,dessert,signature);

  display.append(menu);
};

export default loadMenu;
