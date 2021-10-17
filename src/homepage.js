import "./style.css";
import loadNavbar from "./navbar";

const loadHomepage = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const heroImage = new Image();
  heroImage.src = "../assets/dale-desk.jpeg";

  const headline = document.createElement("h1");
  headline.textContent = "Chug Hut";

  const copy = document.createElement("p");
  copy.textContent =
    "Chef Dale is hard at work making sure that the pizzas, pancakes, and pies at Chug Hut are sourced from Orange County's finest vendors.";

  display.append(heroImage, headline, copy);
};

export default loadHomepage;
