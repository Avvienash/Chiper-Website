function caesarCipher(plaintext, shift) {
    let encryptedText = '';
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (char.match(/[a-z]/i)) { // Check if the character is an alphabet letter (case-insensitive)
            // Get the code of the character and determine the offset based on case
            const code = plaintext.charCodeAt(i);
            let offset;
            if (char.toUpperCase() === char) { // Uppercase letters
                offset = 65;
            } else { // Lowercase letters
                offset = 97;
            }
            // Shift character and wrap around using modulo
            encryptedText += String.fromCharCode(((code - offset + shift) % 26) + offset);
        } else {
            // If it's not a letter, just append it as is
            encryptedText += char;
        }
    }
    return encryptedText;
}

// Example usage
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Text to be ciphered: ", function(plaintext) {
    const shift = 3; // Number of positions to shift each character
    const ciphertext = caesarCipher(plaintext, shift);
    console.log("Ciphertext:", ciphertext);
    readline.close();
});
