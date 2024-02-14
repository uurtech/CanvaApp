const fs = require('fs');
const xlsx = require('xlsx');

const workbook = xlsx.readFile('./data/sorular.xlsx');
const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet

const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);

fs.writeFile('./data/sorular.json', JSON.stringify(data), 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
}});


