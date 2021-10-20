import loadHomepage from "./homepage";
import loadMenu from "./menu";
import loadContact from "./contact";

const loadNavbar = () => {
  const display = document.querySelector("#content");

  while (display.firstChild) {
    display.firstChild.remove();
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.id = "btn-container";

  const homeButton = document.createElement("button");
  homeButton.classList.add("home-btn");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", loadHomepage);

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-btn");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", loadMenu);

  const contactButton = document.createElement("button");
  contactButton.classList.add("contact-btn");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", loadContact);

  buttonContainer.append(homeButton, menuButton, contactButton);

  display.append(buttonContainer);
};

export default loadNavbar;
