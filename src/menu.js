import loadNavbar from "./navbar";

const loadMenu = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const menu = document.createElement('div');
  menu.id = "menu"

  const snack = document.createElement('div');
  snack.innerHTML = "<h2>Peanut Butter Bacon Bites</h2><img src='../assets/peanut-butter-bacon-bites.jpeg'><p>Salt and umami collide in these chewy, hot-out-of-the-oven delights.</p>";

  const salad = document.createElement('div');
  salad.innerHTML = "<h2>Tuna and Apple Refresh</h2><img src='../assets/tuna-apple-salad.jpeg'><p>Add the zest your day is missing beside the comfort of an old favorite.</p>";

  const pizza = document.createElement('div');
  pizza.innerHTML = "<h2>Cheesy Chicken Deluxe</h2><img src='../assets/cheesy-chicken-pizza.jpeg'><p>Our signature pie, topped with juicy chicken and mountains of melted cheese.</p>";

  const dessert = document.createElement('div');
  dessert.innerHTML = "<h2>Chuggy Freeze</h2><img src='../assets/peanut-butter-banana-ice-cream.jpeg'><p>The perfect topper on any party. Ask about the birthday cup!</p>";

  const signature = document.createElement('span')
  signature.innerHTML = "Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>."

  menu.append(snack,salad,pizza,dessert, signature);

  display.append(menu);
};

export default loadMenu;
