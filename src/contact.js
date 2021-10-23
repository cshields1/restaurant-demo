import loadNavbar from "./navbar";
import DogArcade from "../assets/dog-arcade.jpeg";

const loadContact = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const contactImage = new Image();
  contactImage.src = DogArcade;

  const address = document.createElement('div');
  address.innerHTML = "<h2>Address</h2><p>1406 S. Fairview St.<br>Santa Ana, CA 92704</p>";

  const phone = document.createElement('div');
  phone.innerHTML = "<h2>Phone Number</h2><p>(714) 435-7857</p>";

  const email = document.createElement('div');
  email.innerHTML = "<h2>Email</h2><p><a href='mailto:dale@chughut.com'>dale@chughut.com</a></p>";

  const contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";
  contactInfo.append(address,phone,email)

  const signature = document.createElement('span')
  signature.innerHTML = "Made by Craig Shields for <a href='www.theodinproject.com'>The Odin Project</a>."

  display.append(contactImage, contactInfo, signature);
};

export default loadContact;
