console.log("Script loaded");

const encodedTextDisplay = document.getElementById("encoded-text");
const shiftValueInput = document.getElementById("shift-value");
const submitGuessButton = document.getElementById("submit-guess");
const guessLog = document.getElementById("guess-log");

let randomShift = 0; // Random shift value
let encodedText = ""; // Encoded text
let attempts = 0; // Track user attempts
const maxAttempts = 5; // Maximum allowed attempts

// Dictionary of 5-letter words related to ciphers
const plaintextDictionary = [
  "cipher",
  "block",
  "prime",
  "token",
  "shift",
  "alpha",
  "plain",
  "curve",
  "digit",
  "keyed",
];

// Caesar Cipher Encode Function
function caesarCipherEncode(plaintext, shift) {
  let encodedText = "";
  for (let char of plaintext) {
    if (char.match(/[a-zA-Z]/)) {
      const charCode = char.charCodeAt(0);
      const isUpperCase = charCode >= 65 && charCode <= 90;

      let newCharCode = charCode + shift;
      if (isUpperCase) {
        if (newCharCode > 90) newCharCode -= 26;
        if (newCharCode < 65) newCharCode += 26;
      } else {
        if (newCharCode > 122) newCharCode -= 26;
        if (newCharCode < 97) newCharCode += 26;
      }

      encodedText += String.fromCharCode(newCharCode);
    } else {
      encodedText += char; // Preserve spaces and special characters
    }
  }
  return encodedText;
}

// Generate a random encoded text challenge
function generateChallenge() {
  const selectedPlaintext =
    plaintextDictionary[
      Math.floor(Math.random() * plaintextDictionary.length)
    ];

  randomShift = Math.floor(Math.random() * 26) + 1; // Random shift between 1 and 26
  encodedText = caesarCipherEncode(selectedPlaintext, randomShift);

  encodedTextDisplay.textContent = encodedText;
  console.log(
    `Generated encoded text: "${encodedText}" with shift: ${randomShift}`
  ); // Debugging
}

// Update Guess Log and Decoded Result
// Ensure decoded result container is centered
function updateGuessLog(shiftValue, decodedText, isCorrect) {
  // Create a container for this guess
  const decodedResultContainer = document.createElement("div");
  decodedResultContainer.style.cssText = `
      display: flex; 
      gap: 10px; 
      justify-content: center; 
      flex-wrap: wrap; 
      margin-top: 10px;
  `;

  // Key Box
  const keyBox = document.createElement("div");
  keyBox.textContent = `Key = ${shiftValue}`;
  keyBox.style.cssText = `
      width: 70px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: ${isCorrect ? "#4CAF50" : "#D32F2F"};
      color: white;
      font-size: 14px;
  `;
  decodedResultContainer.appendChild(keyBox);

  // Add character boxes for decoded text
  for (let char of decodedText) {
      const charBox = document.createElement("div");
      charBox.textContent = char;
      charBox.style.cssText = `
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: ${isCorrect ? "#4CAF50" : "#D32F2F"};
          color: white;
          font-size: 16px;
      `;
      decodedResultContainer.appendChild(charBox);
  }

  // Append the container to the guess log
  const guessLog = document.getElementById("guess-log");
  guessLog.appendChild(decodedResultContainer);
}


// Event listener to rotate the wheel on shift guess
submitGuessButton.addEventListener("click", () => {
  const shiftValue = parseInt(shiftValueInput.value);
  if (!isNaN(shiftValue)) {
    rotateWheel(shiftValue);
  }
});


// Event Listener for Submitting a Guess
submitGuessButton.addEventListener("click", () => {
  const shiftValue = parseInt(shiftValueInput.value);

  console.log(`Shift Value Entered: ${shiftValue}, Correct Shift: ${randomShift}`); // Debugging

  if (isNaN(shiftValue)) {
    alert("Please enter a valid shift value.");
    return;
  }

  // Decode the encoded text with the entered shift value
  const decodedText = caesarCipherEncode(encodedText, -shiftValue);

  // Check if the user guessed the correct shift
  const isCorrect = shiftValue === randomShift;

  // Update the log with the decoded result and whether the guess is correct
  updateGuessLog(shiftValue, decodedText, isCorrect);

  if (isCorrect) {
    alert(`Congratulations! You guessed the correct shift!`);
    submitGuessButton.disabled = true;
    shiftValueInput.disabled = true;
  } else {
    attempts++;

    if (attempts >= maxAttempts) {
      alert(`Game over! The correct shift was ${randomShift}.`);
      submitGuessButton.disabled = true;
      shiftValueInput.disabled = true;
    } else {
      alert(`Incorrect shift! Attempts remaining: ${maxAttempts - attempts}`);
    }
  }
});

// Generate the initial challenge
generateChallenge();
