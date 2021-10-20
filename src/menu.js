import loadNavbar from "./navbar";

const loadMenu = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const menu = document.createElement('div');
  menu.id = "menu"

  const snack = document.createElement('div');
  snack.innerHTML = "<h2>Peanut Butter Bacon Bites</h2><img src='../assets/peanut-butter-bacon-bites.jpeg'><p>Peanut Butter Bacon Bites stuff</p>";

  const salad = document.createElement('div');
  salad.innerHTML = "<h2>Tuna and Apple Refresh</h2><img src='../assets/tuna-apple-salad.jpeg'><p>Tuna and Apple stuff</p>";

  const pizza = document.createElement('div');
  pizza.innerHTML = "<h2>Cheesy Chicken Deluxe</h2><img src='../assets/cheesy-chicken-pizza.jpeg'><p>Cheesy Chicken Deluxe stuff</p>";

  const dessert = document.createElement('div');
  dessert.innerHTML = "<h2>Chuggy Freeze</h2><img src='../assets/peanut-butter-banana-ice-cream.jpeg'><p>Peanut Butter Bacon Bites stuff</p>";

  menu.append(snack,salad,pizza,dessert);

  display.append(menu);
};

export default loadMenu;
