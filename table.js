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

    return table;
}

console.log(printAsciiTable());
