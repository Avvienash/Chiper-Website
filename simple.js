function convertTextToHex() 
{


    let text = document.getElementById("textInput").value;

    if (text == null || text == '') {
        //alert('Please enter some text to convert to hex');
        return;
    }

    let hexString = '';
    for (let i = 0; i < text.length; i++) {
        const hex = text.charCodeAt(i).toString(16);
        hexString += hex;
    }

    document.getElementById("ASCIIInput").value = hexString;

    console.log('Converting text to hex');
    console.log(document.getElementById("textInput").value);
    console.log(document.getElementById("ASCIIInput").value);

}

function convertHexToText() 
{
    let hexString = document.getElementById("ASCIIInput").value;

    if (hexString == null || hexString == '') {
        //alert('Please enter some text to convert to hex');
        return;
    }

    let text = '';
    for (let i = 0; i < hexString.length; i += 2) {
        const hexPair = hexString.substring(i, i + 2);
        text += String.fromCharCode(parseInt(hexPair, 16));
    }

    document.getElementById("textInput").value = text;

    console.log('Converting hex to text');
    console.log(document.getElementById("ASCIIInput").value);
    console.log(document.getElementById("textInput").value);
}

function printAsciiTable() {
    let columns = 4; // Number of columns for the table
    let columnWidth = 15; // Width of each column
    let startChar = 32; // ASCII code for space (first printable character)
    let endChar = 126; // ASCII code for tilde (last printable character)
    let numRows = Math.ceil((endChar - startChar + 1) / columns);

    let table = "ASCII Table:\n";
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < columns; j++) {
            let ascii = i + j * numRows + startChar;
            if (ascii <= endChar) {
                let char = String.fromCharCode(ascii);
                let entry = `${char} (${ascii})`;
                table += entry.padEnd(columnWidth, ' ');
            }
        }
        table += '\n';
    }

    console.log('Printing ASCII table');
    console.log(table);
}