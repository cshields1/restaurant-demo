import loadHomepage from "./homepage";
import loadContactTab from "./contact";

loadHomepage();

const homeButton = document.createElement("button");
homeButton.classList.add("home-btn");

const contactButton = document.createElement("button");
contactButton.classList.add("contact-btn");
contactButton.addEventListener("click", loadContactTab);
