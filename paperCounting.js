function paperRequirements(first, second, third){
    let firstBook = first * 100;
    let secondBook = second * 200; 
    let thirdBook = third * 300;
    
    let totalPage = firstBook + secondBook + thirdBook;

    return console.log('first book quantity: ', first, 'second book quantity: ', second,'third book quantity: ', third, 'and total necessary pages: ', totalPage);
}


paperRequirements(10, 12, 4);