let i = 0; 
let cellOne = "";
let cellTwo = "";
let cellThree = "";
let cellFour = "";
let currCell = "";


let csvData = "ID,Name,Occupation,Age,Color\n42,Bruce,Knight,41,blue\n57,Bob,Fry Cook,19,red\n63,Blaine,Quiz Master,58,white\n98,Bill,Doctor’s Assistant,26,black";

//Part 2
// Number of columns:

let numCol = 1

let storedArr = []

while (i < csvData.length) {
  if (csvData[i] == ",") { 
    numCol++;

  }
  else if(csvData[i] == "\n"){

    break;
  } i++;
  
}

console.log('Number of columns:', numCol)


// Store results into a 2-D array:

let rowData = csvData.split('\n')
console.log(rowData)

// 
let arrOfArr = []


for (i = 0 ; i < rowData.length ; i++) {
    let colData = rowData[i].split(',')
    arrOfArr.push(colData)
}


console.log(arrOfArr)

//Part 3
//Convert 2-D array to array with 4 objects with key value pairs and lower case the keys.

let objectArr = []

for (j = 1 ; j < arrOfArr.length ; j++ ) {
  let arrObj = {}  
  for ( k = 0 ; k < arrOfArr[j].length ; k++) {
      let newKey = arrOfArr[0][k].toLocaleLowerCase();
      console.log(newKey, arrOfArr[j])
      arrObj[newKey] = arrOfArr[j][k]
    }

    objectArr.push(arrObj)
}
console.log(objectArr)

//Part 4
// 1. Using array methods to remove the last element:

let poppedArr = objectArr.pop()

console.log(poppedArr)
console.log(objectArr)

// 2. insert the following object at index 1:
let objectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" }

objectArr.splice(1, 0, objectAtIndex1)
console.log(objectArr)

// 3. Add the following object to the end of the array:
let objectAtEndOfArray = { id: "7", name: "Bilbo", occupation: "None", age: "111" }

objectArr.push(objectAtEndOfArray)
console.log(objectArr)

// 4. Using a loop calculate the avg. age of the group. (result should be: (41+25+19+58+111)/5 = 50.8 years)

let sumOfAges = 0

for (let i = 0 ; i < objectArr.length ; i++) {
    sumOfAges += Number(objectArr[i].age);
    avgAge = sumOfAges/objectArr.length
    console.log(avgAge);
}

// Part 5: Full Circle

let rowHeaders = Object.keys(objectArr[0])
console.log(rowHeaders)
let newCSV = rowHeaders.join(",")
newCSV = `${newCSV}\n`
console.log(newCSV)

for (let i = 0 ; i < objectArr.length ; i++) {
    let row = [];
    console.log(row);
    for (let j = 0 ; j < rowHeaders.length ; j++) {
      let key = rowHeaders[j];
      row.push(objectArr[i][key])
    }
    newCSV += `${row.join(',')}\n`
}
console.log(newCSV)





