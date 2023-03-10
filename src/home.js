function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const burgerImage = document.createElement("img");
    burgerImage.src = "/dist/img/burgerhome.jpeg";
    burgerImage.alt = "Burger";

    home.appendChild(createParagraph("Best burger in the world"));
    home.appendChild(createParagraph("Made with passion since 1999"));
    home.appendChild(burgerImage);
    home.appendChild(createParagraph("Order online or come visit us!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;