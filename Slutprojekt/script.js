function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  const newColorScheme = event.matches ? "dark" : "light";
});

function myBuy(){
  alert ("Du har nu köpt denna produkt!")
};

let lang = navigator.language || navigator.userlanguage; 

const textInSwedish = [
  "Playstation konsoll från år 1995 (Minne säljs separat)",
  "Gamecube från 2001, Begagnat och renoverat",
  "Spelkonsoll från år 1994. Spel säljs separat.",
  "Xbox från år 2001. Spel inkluderat.",
  "Handhållen spelkonsoll med touchskärm och en styluspenna, släpptes år 2006.",
  "En portabel konsol från år 2017. En unik spelkonsoll som kan användas både hemma och som en handhållen konsoll." ,
  "Konsoll från 2010 med handkontroll (nunchuck ingår ej)",
  "Släpptes år 1988. Renoverat och i bra skick.",
  "Atari konsoll från  år 1981. Oöppnad förpackning.",
  "Den andra generationens spelkonsoll, utgivare: Sony släpptes år 2000."
];
const textInEnglish = [
  "Playstation game console, released year 1995(Memory sold seperatly)",
  "Gamecube from year 2001, used condition and renovated",
  "Game console from  year 1994. Games sold seperatly",
  "Xbox from year 2001. Game included",
  "Handheld game console with a touchscreen and styluspen, released year 2006.",
  "A portable console from 2017. A unique game console that can be used at home and as a handheld console",
  "Console from 2010 with control(Nunchuk not available)",
  "Released 1988, Renovated and in good condition",
  "Atari console from 1981. unopened packaging",
  "Second generation game console from Sony, released in year 2000.",
];

//

const product0 = document.getElementById("product0text");
const product1 = document.getElementById("product1text");
const product2 = document.getElementById("product2text");
const product3 = document.getElementById("product3text");
const product4 = document.getElementById("product4text");
const product5 = document.getElementById("product5text");
const product6 = document.getElementById("product6text");
const product7 = document.getElementById("product7text");
const product8 = document.getElementById("product8text");
const product9 = document.getElementById("product9text");

const allProducts = [
  product0,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  
];

const menuEngText = [
  "Home",
  "Shop",
  "Home",
  "Shop",
  "Phone: 0704-294669",
  "Map",
  "Social media:",
  "Linkedin",
  "Welcome to RETRO!"
];

const menus = [
  document.getElementById("menu0"),
  document.getElementById("menu1"),
  document.getElementById("menu2"),
  document.getElementById("menu3"),
  document.getElementById("menu4"),
  document.getElementById("menu5"),
  document.getElementById("menu6"),
  document.getElementById("menu7"),
  document.getElementById("menu8"),
  document.getElementById("menu9")
  
]

const menuSwedishText = [
  'Hem',
  'Shoppen',
  'Hem',
  'Shoppen',
  'Telefon: 044- 1337 420',
  'Karta',
  'Sociala medier:',
  'Linkedin',
  'Välkommen till RETRO!'
]


function englishFunction() {
  console.log("Ändra till Engelska");
    allProducts[0].innerHTML =textInEnglish[0];
  allProducts[1].innerHTML = textInEnglish[1];
  allProducts[2].innerHTML = textInEnglish[2];
  allProducts[3].innerHTML = textInEnglish[3];
  allProducts[4].innerHTML = textInEnglish[4];
  allProducts[5].innerHTML = textInEnglish[5];
  allProducts[6].innerHTML = textInEnglish[6];
  allProducts[7].innerHTML = textInEnglish[7];
  allProducts[8].innerHTML = textInEnglish[8];
  allProducts[9].innerHTML = textInEnglish[9];

  menus[0].innerHTML = menuEngText[0];
  menus[1].innerHTML = menuEngText[1]
  menus[2].innerHTML = menuEngText[2]
  menus[3].innerHTML = menuEngText[3]
  menus[4].innerHTML = menuEngText[4]
  menus[5].innerHTML = menuEngText[5]
  menus[6].innerHTML = menuEngText[6]
  menus[7].innerHTML = menuEngText[7]
  menus[8].innerHTML = menuEngText[8]
  menus[9].innerHTML = menuEngText[9]
  

  const buyButton = document.querySelectorAll('.buyButton');
  for (i=0; i<buyButton.length; i++){
    buyButton[i].innerHTML= 'Buy it now'
  }
  }

function swedishFunction() {
  allProducts[0].innerHTML = textInSwedish[0];
  allProducts[1].innerHTML = textInSwedish[1];
  allProducts[2].innerHTML = textInSwedish[2];
  allProducts[3].innerHTML = textInSwedish[3];
  allProducts[4].innerHTML = textInSwedish[4];
  allProducts[5].innerHTML = textInSwedish[5];
  allProducts[6].innerHTML = textInSwedish[6];
  allProducts[7].innerHTML = textInSwedish[7];
  allProducts[8].innerHTML = textInSwedish[8];
  allProducts[9].innerHTML = textInSwedish[9];

  menus[0].innerHTML = menuSwedishText[0];
  menus[1].innerHTML = menuSwedishText[1]
  menus[2].innerHTML = menuSwedishText[2]
  menus[3].innerHTML = menuSwedishText[3]
  menus[4].innerHTML = menuSwedishText[4]
  menus[5].innerHTML = menuSwedishText[5]
  menus[6].innerHTML = menuSwedishText[6]
  menus[7].innerHTML = menuSwedishText[7]
  menus[8].innerHTML = menuSwedishText[8]
  menus[9].innerHTML = menuSwedishText[9]
  

  const buyButton = document.querySelectorAll('.buyButton');
  for (i=0; i<buyButton.length; i++){
    buyButton[i].innerHTML= 'Köp nu'
  }

}

if (lang === "sv-SE") {
  console.log("Tjenare mannen IF på svenska");
} else if (lang === "en-US") {
  console.log("Hello motherTRUCKER!!! if else på engelska");

  allProducts[0].innerHTML= textInEnglish[0];
  allProducts[1].innerHTML = textInEnglish[1];
  allProducts[2].innerHTML = textInEnglish[2];
  allProducts[3].innerHTML = textInEnglish[3];
  allProducts[4].innerHTML = textInEnglish[4];
  allProducts[5].innerHTML = textInEnglish[5];
  allProducts[6].innerHTML = textInEnglish[6];
  allProducts[7].innerHTML = textInEnglish[7];
  allProducts[8].innerHTML = textInEnglish[8];
  allProducts[9].innerHTML = textInEnglish[9];

menus[0].innerHTML = menuEngText[0];
menus[1].innerHTML = menuEngText[1]
menus[2].innerHTML = menuEngText[2]
menus[3].innerHTML = menuEngText[3]
menus[4].innerHTML = menuEngText[4]
menus[5].innerHTML = menuEngText[5]
menus[6].innerHTML = menuEngText[6]
menus[7].innerHTML = menuEngText[7]
menus[8].innerHTML = menuEngText[8]
menus[9].innerHTML = menuEngText[9]

const buyButton = document.querySelectorAll('.buyButton');
for (i=0; i<buyButton.length; i++){
  buyButton[i].innerHTML= 'Buy it now'
}

}