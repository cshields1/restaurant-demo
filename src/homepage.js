import "./style.css";
import loadNavbar from "./navbar";
import DaleDesk from "../assets/dale-desk.jpeg";

const loadHomepage = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const heroImage = new Image();
  heroImage.src = DaleDesk;

  const headline = document.createElement("h1");
  headline.textContent = "Chug Hut";

  const copy = document.createElement("p");
  copy.textContent =
    "Chef Dale is hard at work making sure that the pizzas, pancakes, and pies at Chug Hut are sourced from Orange County's finest vendors.";

  const signature = document.createElement('span')
  signature.textContent = "Made by Craig Shields for The Odin Project."

  display.append(heroImage, headline, copy, signature);
};

export default loadHomepage;
