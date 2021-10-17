import loadNavbar from "./navbar";

const loadContact = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  while (display.firstChild) {
    display.firstChild.remove();
  }

  const contactImage = new Image();
  contactImage.src = "";

  const contactContainer = document.createElement("section");
  contactContainer.id = "contact-div";

  const contactInfo = document.createElement("p");
  contactInfo.classList.add("contact-info");
  contactInfo.innerHTML =
    "<h2>Address</h2><p>1406 S. Fairview St.<br>Santa Ana, CA 92704</p><h2>Phone Number</h2><p>(714) 435-7857</p><h2>Email</h2><p><a href='mailto:dale@chughut.com'>dale@chughut.com</a></p>";

  contactContainer.append(contactInfo);

  display.append(contactImage, contactContainer);
};

export default loadContact;
