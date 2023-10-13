const reader = require('xlsx');
const file = reader.readFile('./name_js.xlsx');
let data = [];
let result = [];
const sheets = file.SheetNames; 
  
for(let i = 0; i < sheets.length; i++) { 
   const temp = reader.utils.sheet_to_json( 
    file.Sheets[file.SheetNames[i]]) 
   temp.forEach((res) => { 
      data.push(res) 
   }) 
};

function searchName(inputValue) {
    for (var i=0 ; i < data.length ; i++) {
        if (inputValue.includes(data[i].Name)) {
            result.push(data[i].Name)
        } 
    }

    if (result.length === 0) {
        console.log("номер не найден")
    } else {
        console.log("номер найден")
    }
}
let findList = ['С405ММ799', 'С405ММ7d99', 'С405ММ7g99']
searchName(findList);