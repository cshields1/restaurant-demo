import loadNavbar from "./navbar";
import DogArcade from "../assets/dog-arcade.jpeg";
import addSignature from "./signature";

const loadContact = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const contactImage = new Image();
  contactImage.src = DogArcade;

  const address = document.createElement('div');
  const addressHeading = document.createElement('h2');
  addressHeading.textContent = "Address";
  const addressInfo = document.createElement('p');
  addressInfo.textContent = "1406 S. Fairview St., Santa Ana, CA 92704"
  address.append(addressHeading, addressInfo);

  const phone = document.createElement('div');
  const phoneHeading = document.createElement('h2');
  phoneHeading.textContent = "Phone Number";
  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = "(714) 435-7857";
  phone.append(phoneHeading, phoneNumber);

  const email = document.createElement('div');
  const emailHeading = document.createElement('h2');
  emailHeading.textContent = "Email";
  const emailAddress = document.createElement('p')
  const emailLink = document.createElement('a');
  emailLink.setAttribute('href', 'mailto:dale@chughut.com');
  emailLink.textContent = "dale@chughut.com";
  emailAddress.append(emailLink);
  email.append(emailHeading, emailAddress, emailLink)

  const contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";
  contactInfo.append(address,phone,email)

  display.append(contactImage, contactInfo);

  addSignature();
};

export default loadContact;
