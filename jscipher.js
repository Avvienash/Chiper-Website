const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTextToHex(text) {
    let hexString = '';
    for (let i = 0; i < text.length; i++) {
        const hex = text.charCodeAt(i).toString(16);
        hexString += hex;
    }
    return hexString;
}

function convertHexToText(hexString) {
    let text = '';
    for (let i = 0; i < hexString.length; i += 2) {
        const hexPair = hexString.substring(i, i + 2);
        text += String.fromCharCode(parseInt(hexPair, 16));
    }
    return text;
}

readline.question('Enter text to convert: ', (inputText) => {
    const hexString = convertTextToHex(inputText);
    const recoveredText = convertHexToText(hexString);
    console.log(`Original Text: ${inputText}`);
    console.log(`Hexadecimal ASCII Output: ${hexString}`);
    console.log(`Recovered Text from Hex: ${recoveredText}`);
    readline.close();
});


