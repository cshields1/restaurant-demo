const addSignature = () => {
    const display = document.querySelector("#content");

    const signature = document.createElement('p');
    signature.id = 'signature';
    const odinLink = document.createElement('a');
    odinLink.setAttribute('href', "https://www.theodinproject.com");
    odinLink.textContent = "The Odin Project";
    signature.textContent = "Made by Craig Shields for "
    signature.append(odinLink);

    display.append(signature);
}

export default addSignature;