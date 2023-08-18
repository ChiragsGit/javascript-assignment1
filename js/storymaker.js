// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
const nouns1Array = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat",
];
const verbsArray = [
  "sat on",
  "ate",
  "danced with",
  "saw",
  "doesn't like",
  "kissed",
];
const adjectivesArray = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
const nouns2Array = ["goat", "monkey", "fish", "cow", "frog", "bug"];
const settingsArray = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "in my shoes",
];

// Variables for count to grab array elements
let nouns1Count = 0;
let verbsCount = 0;
let adjectivesCount = 0;
let nouns2Count = 0;
let settingsCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  choosenNoun1.textContent = nouns1Array[nouns1Count];
  nouns1Count = (nouns1Count + 1) % nouns1Array.length;
}

function verb_on_click() {
  choosenVerb.textContent = verbsArray[verbsCount];
  verbsCount = (verbsCount + 1) % verbsArray.length;
}

function adjective_on_click() {
  choosenAdjective.textContent = adjectivesArray[adjectivesCount];
  adjectivesCount = (adjectivesCount + 1) % adjectivesArray.length;
}

function noun2_on_click() {
  choosenNoun2.textContent = nouns2Array[nouns2Count];
  nouns2Count = (nouns2Count + 1) % nouns2Array.length;
}

function setting_on_click() {
  choosenSetting.textContent = settingsArray[settingsCount];
  settingsCount = (settingsCount + 1) % settingsArray.length;
}

function playback_on_click() {
  story.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
}

function random_on_click() {
  const randomNoun1 =
    nouns1Array[Math.floor(Math.random() * nouns1Array.length)];
  const randomVerb = verbsArray[Math.floor(Math.random() * verbsArray.length)];
  const randomAdjective =
    adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
  const randomNoun2 =
    nouns2Array[Math.floor(Math.random() * nouns2Array.length)];
  const randomSetting =
    settingsArray[Math.floor(Math.random() * settingsArray.length)];

  story.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;
}

function reset_on_click() {
  choosenNoun1.textContent = "";
  choosenVerb.textContent = "";
  choosenAdjective.textContent = "";
  choosenNoun2.textContent = "";
  choosenSetting.textContent = "";
  story.textContent = "";
}
/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
reset.addEventListener("click", reset_on_click);
