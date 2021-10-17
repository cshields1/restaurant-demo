const loadContactTab = () => {
  const display = document.querySelector("#content");

  const contactImage = new Image();
  contactImage.src = "";
  display.append(contactImage);

  const contactContainer = document.createElement("section");
  contactContainer.classList.add("contact-div");
  const contactInfo = document.createElement("p");
  contactInfo.classList.add("contact-info");
  contactInfo.innerHTML =
    "<h2>Address</h2><p>address</p><h2>Phone Number</h2><p>phone</p><h2>Email</h2><p>email</p>";

  contactContainer.append(contactInfo);
  display.append(contactContainer);
};

export default loadContactTab;
