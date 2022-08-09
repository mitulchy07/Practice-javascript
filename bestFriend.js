let friends = ['asma', 'nur', 'shawon', 'janpakhi', 'koliza'];

let longestName = [0];

function bestFriend(friends){
    for(let i = 0; i < friends.length ; i++){
        
        let singleName = friends[i];
        if(singleName.length > longestName.length){
            longestName = singleName;
        }
    }
    return longestName;

}

console.log(bestFriend(friends));;