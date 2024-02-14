const fs = require('fs');
const xlsx = require('xlsx');

const workbook = xlsx.readFile('./data/sorular.xlsx');
const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet

const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);

console.log(data);
