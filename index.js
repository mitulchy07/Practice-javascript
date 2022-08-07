// var number =[45, 46, 77, 47, 44];

// for (var i=0; i < number.length; i++  ) {
//     if(number[i] == 47){
//         console.log("Arrey Found.");
//         break;
//     }
//     else{
//         console.log("Nothing Found.");
//     }
// }


// var a = 6;
// var b = 6;

// console.log(a == b);

// var hello = "Ajke amar mon valo nei";
// for (var i=0; i<39; i++){console.log(hello, i);};



// function startFan (){
//     console.log("Hello World.");
//     console.log("tumi muri khaw.");
//     console.log("ami gumai.");
// }


// startFan();


//  function gettingSingara(money){

//     var singaraPrice = 15;
//     var quantity = money / singaraPrice;
//     return quantity;
//  }

//  var singaras = gettingSingara(150);

//  console.log("I will have : ", singaras, "singaras.");

//  function movie(){
//     return "Din-The day";
//     return "Poran";
//     return "Hawa";
//   }
//   console.log(movie());

//   var mitul = {
//      fullName : 'Hasan Chowdhuri',
//      age: 25,
//      hobby: 'Watching movie',
//      height: '176cm',
//      weight: '85kg',
//   }

//   console.log(mitul);

//   console.log(mitul.height);

//   var heightChange = mitul.height;

//   var heightChange2 = mitul['height'];

//   mitul.age = 26;
//   console.log(heightChange2);
//   console.log(mitul);
// var values = Object.values(mitul);
// var keys = Object.keys(mitul);
// console.log(values, keys );


// for(var i=0; i<keys.length; i++){
//    a = keys[i];
//    b = values[i];
//    console.log(a , b);
// }





// var arr = ['a', 'b', 'c'];
// var str = "abc";


// console.log(typeof(arr));
// console.log(typeof(str));



// const userName = 'blackPinik';
// const userInput = 'blacKpinik';

// if (userName.toLowerCase === userInput.toLowerCase){
//    console.log("Everythings Okey here.");

// }

// else{
//    console.log("Something Wrong");
// }

// var chokka = Math.round(Math.random()*6) ;

// console.log(chokka);



// let chinku = 100;
// let dela = 99 ;
// let kela = 95;



// function maxNumber(a, b, c){
 
//    let maxNum = Math.max(a, b, c);
//    return maxNum;

// }

// function minNumber(a, b, c){
 
//    let minNum = Math.min(a, b, c);
//    return minNum;

// }

// console.log(maxNumber(chinku, dela, kela));
// console.log(minNumber(chinku, dela, kela));


// function reverseString(text){
//    let reversed = '';
//    for(let i = text.length - 1; i >= 0; i--){
//       const element = text[i];
//       reversed = reversed + element;
//    }
//    console.log(reversed);
//    return reversed
// }

// let paragraph = "I love my Country. ";
// reverseString(paragraph);


// const a = 12;


let arr = [12, 13, 14, 15, 34, 35];
let arr2 = [133, 98, 65, 78];

let totalArray = arr2.concat(arr);
console.log(arr);
console.log(arr2);
console.log(totalArray);
console.log(Array.isArray(arr));