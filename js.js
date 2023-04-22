let readlineSync = require('readline-sync');

// Ask the user health-related questions and record their responses
let feelingGood = readlineSync.question("Are you feeling good today? (yes or no) ").toLowerCase();

let contactCovid = readlineSync.question("Have you been exposed to COVID patients in the past 14 days? (yes or no) ").toLowerCase();

let hasFever = readlineSync.question("Do you have a fever? (yes or no) ").toLowerCase();

let hasCough = readlineSync.question("Do you have a cough? (yes or no) ").toLowerCase();

let hasShortnessOfBreath = readlineSync.question("Do you have shortness of breath? (yes or no) ").toLowerCase();

// Determine the user's risk level based on their responses
if (feelingGood === "yes" && contactCovid === "no" && hasFever === "no" && hasCough === "no" && hasShortnessOfBreath === "no") {
    console.log("You are at a low risk level (green).");
} else if ((feelingGood === "no" || hasFever === "yes") && (hasCough === "yes" || hasShortnessOfBreath === "yes") || contactCovid === "no") {
    console.log("You are at a high risk level (red).");
} else {
    console.log("You are at a medium risk level (yellow).");
}
