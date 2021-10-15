import "./style.css";

const loadHomepage = () => {
  const display = document.querySelector("#content");

  const heroImage = new Image();
  heroImage.src = "../assets/dale-desk.jpeg";
  display.append(heroImage);

  const headline = document.createElement("h1");
  headline.textContent = "Dale's Peanut Butter Pancake";
  display.append(headline);

  const copy = document.createElement("p");
  copy.textContent =
    "Chef Dale takes care to ensure that the pancakes on your plate are full of buttery, flavorful peanuts sourced from Orange County's finest farmers.";
  display.append(copy);
};

export default loadHomepage;
