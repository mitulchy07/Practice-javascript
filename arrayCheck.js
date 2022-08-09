let arr = [65, 23, 54, 45, 76, 32, -234, 23, 432, -23, 29, 12];

let finalArray = [];

for (let i = 0; i < arr.length; i++){
    let singleArray = arr[i];
    if(singleArray >= 0){
        // finalArray += singleArray;
        finalArray.push(singleArray);
        // finalArray = finalArray.concat(singleArray);
    }
    else{
        break;
    }
}

console.log(finalArray);



// let superFinalArray = finalArray.pop();

// console.log(superFinalArray);


