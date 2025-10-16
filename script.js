let counter = 0;
const maxCounter = getRandomInt(100, 300); // Random max limit between 200 and 600
const counterElement = document.getElementById("counter");
const requiredKeyElement = document.getElementById("requiredKey");
const congratsMessageElement = document.getElementById("congratsMessage");
const maxCounterElement = document.getElementById("maxCounter");
const randomTextElement = document.getElementById("randomText");
const textList = [
    "Aww, really that much?",
    "Wow, that's... a lot of love",
    "So much love!",
    "There's no end to your love",
    "You're so sweet",
    "You're so lovely",
    "No sign of tiredness wow...",
    "You just keep going",
    "Such dedication for love",
    "You're cute",
];

maxCounterElement.textContent = maxCounter; // Display the random max counter

let nextRandomChange = getRandomInt(10, 30);
let currentRequiredKey = getRandomKey();
let keyDown = false;

requiredKeyElement.textContent = currentRequiredKey;

const keydownFunction = (event) => {
    if (!keyDown && event.key === currentRequiredKey) {
        keyDown = true;
    }
}

const keyupFunction = (event) => {
    if (keyDown && event.key === currentRequiredKey) {
        keyDown = false;
        counter++;
        counterElement.textContent = counter;

        if (counter >= maxCounter + 1) {
            // Display congratulations message
            const instructionElement = document.getElementById("instruction");
            instructionElement.style.display = "none"; // Hide the counter
            congratsMessageElement.style.display = "block"; // Show the congratulations message
            document.removeEventListener("keydown", keydownFunction); // Remove the event listener
        } else if (counter === nextRandomChange) {
            currentRequiredKey = getRandomKey();
            nextRandomChange = counter + getRandomInt(10, 30);

            // Update the required key and text displayed on the page
            requiredKeyElement.textContent = currentRequiredKey;
            randomTextElement.textContent = getRandomText();
        }
    }
}

document.addEventListener("keydown", keydownFunction);

document.addEventListener("keyup", keyupFunction);

function getRandomKey() {
    const randomKeyCode = getRandomInt(97, 122); // ASCII codes for 'a' to 'z'
    return String.fromCharCode(randomKeyCode);
}

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textList.length);
    return textList[randomIndex];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
