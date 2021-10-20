import loadNavbar from "./navbar";

const loadContact = () => {
  loadNavbar();

  const display = document.querySelector("#content");

  const contactImage = new Image();
  contactImage.src = "../assets/dog-arcade.jpeg";

  const address = document.createElement('div');
  address.innerHTML = "<h2>Address</h2><p>1406 S. Fairview St.<br>Santa Ana, CA 92704</p>";

  const phone = document.createElement('div');
  phone.innerHTML = "<h2>Phone Number</h2><p>(714) 435-7857</p>";

  const email = document.createElement('div');
  email.innerHTML = "<h2>Email</h2><p><a href='mailto:dale@chughut.com'>dale@chughut.com</a></p>";

  const contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";
  contactInfo.append(address,phone,email)

  display.append(contactImage, contactInfo);
};

export default loadContact;
