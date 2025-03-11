const fs = require('fs');
const XLSX = require('xlsx');

let workbook = XLSX.readFile('E:\\TeamExpert.xlsx');  // Corrected path
let sheetName = workbook.SheetNames[0];
let sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);
fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data written successfully');
    }
  });
  