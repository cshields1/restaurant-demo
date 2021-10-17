import "./style.css";

const loadHomepage = () => {
  const display = document.querySelector("#content");

  const heroImage = new Image();
  heroImage.src = "../assets/dale-desk.jpeg";
  display.append(heroImage);

  const headline = document.createElement("h1");
  headline.textContent = "Chug Hut";
  display.append(headline);

  const copy = document.createElement("p");
  copy.textContent =
    "Chef Dale is hard at work making sure that the pizzas, pancakes, and pies at Chug Hut are sourced from Orange County's finest vendors.";
  display.append(copy);
};

export default loadHomepage;
