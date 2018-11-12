//1. The developer thought the company is named Fruits & Bananas Corp, 
//but it's actually called Fruits & Vegetables Corp
//Text content in header h1 is wrong, should be Fruits & Vegetables Corp 
//(see first issue)

document.querySelector("h1").textContent = "Fruits & Vegetables Corp";

//2. The last a tag in header ul has wrong text content and href attribute 
//(should be Vegetables and not Bananas)

document.querySelectorAll("a")[2].textContent = "Vegetables";
document.querySelectorAll("a")[2].setAttribute("href", "#vegetables");

//3. The section #contact and #about are in the wrong order. Swap them

let contact1 = document.getElementById("contact");
let about1 = document.getElementById("about");
main.insertBefore(about1, contact1);

//(((The text "We're the best in fruits & vegetables" under #about should 
//be wrapped in a p tag: Continue section 5!))
about.textContent = "";

//4. Each section should have a h2 tag at the top with corresponding text 
//according to its id

let aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About";
about.appendChild(aboutTitle).childNodes[0];
about.replaceChild(aboutTitle, about.childNodes[0]);

let contact2 = document.querySelector("#contact");
let contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact";
contact.appendChild(contactTitle).childNodes[0];
contact.replaceChild(contactTitle, contact.childNodes[0]);

//5. The text "We're the best in fruits & vegetables" under #about should 
//be wrapped in a p tag

let abouttext = document.createElement('p');
about.appendChild(abouttext);
abouttext.textContent = ("We're the best in fruits & vegetables");

//6. The developer used td elements in thead instead of th. Fix it.

let replace = document.querySelectorAll("thead td");
for (let td of replace) {
  let replacer = document.createElement("th");
  replacer.textContent = td.textContent;
  td.replaceWith(replacer);
}

//7. The developer forgot to include the main.css file. Add it to head

let head = document.querySelector("head");
let css = document.createElement("link");
css.setAttribute("rel", "stylesheet");
css.setAttribute("href", "main.css");
head.appendChild(css);

//8. Head title is wrong MDN info. Should be "Fruits & Vegetables Corp"
document.title = "Fruits & Vegetables Corp";

/*
─────────▄▄───────────────────▄▄──
──────────▀█───────────────────▀█─
──────────▄█───────────────────▄█─
──█████████▀───────────█████████▀─
───▄██████▄─────────────▄██████▄──
─▄██▀────▀██▄─────────▄██▀────▀██▄
─██────────██─────────██────────██
─██───██───██─────────██───██───██
─██────────██─────────██────────██
──██▄────▄██───────────██▄────▄██─
───▀██████▀─────────────▀██████▀──
──────────────────────────────────
──────────────────────────────────
──────────────────────────────────
───────────█████████████──────────
──────────────────────────────────
──────────────────────────────────
*/