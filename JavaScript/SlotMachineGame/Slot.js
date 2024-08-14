//import the prompt package that you installed 
const prompt=require("prompt-sync")();

const getRandomInt = (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min;
}
const ROWS=3;
const COL=3;


const SYMBOLS_VALUE={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}
const SYMBOLS_COUNT = {
  // THis shows the bet multipler of each winning if you get that alphabet
  "A": getRandomInt(0, 20),
  "B": getRandomInt(0, 20),
  "C": getRandomInt(0, 20),
  "D": getRandomInt(0, 20),
};





// make a function to take input for the amount 
const deposit=()=>{
    while(true){
        const depositAmount=prompt("Enter The amount of money to deposit: ");

        const depositAmountInt=parseFloat(depositAmount);
        
        //Checking edge cases like number should not be a string or less than 0
        if(isNaN(depositAmountInt) || depositAmountInt<=0){
            console.log("Invalid input. Please enter a number:");
        }
        return depositAmountInt;
    }
    // line();
}

// ;ets make a function for number of lines in the slot machine
const line=()=>{
    while(true){
        const line=prompt("Enter The number of lines b/w 1-3: ");
        const numberOfLines=parseFloat(line);
        
        //Checking edge cases like number should not be a string or less than 1 or greater than 3 
        if(isNaN(numberOfLines) || numberOfLines>3 || numberOfLines<1){
            console.log("Invalid input. Please enter a number between 1 and 3:");
        } else{
           return numberOfLines;
        }
    }

}
// taking bet input
const betAmount=(Balance,LinesNumber)=>{
    while(true){
        const input=prompt("Enter the Bet Amount of per line : ");
        const bet=parseFloat(input);
        
        //Checking edge cases like number should not be a string or less than 0 or greater than balance
        if(isNaN(bet) || bet<=0 || bet>Balance/LinesNumber){
            console.log("Invalid input. Please enter again and check your balance ");
        }else{
            return bet;
            
        }
    }
}
//need to do this again// ek aur bar smjhna

const spin=()=>{
    // lets make an array in which we will store our values of symbol
    const symbols=[];
    for(const[symbol,count] of Object.entries(SYMBOLS_VALUE)){
        for(let i=0;i<count;i++){
            symbols.push(symbol);
        }
    }

    const reals=[];
    for(let i=0;i<COL;i++){
        reals.push([]);
        const realSymbol=[...symbols];
        for (let j = 0; j < ROWS; j++) {
            
            const RandomIndex=Math.floor(Math.random()*realSymbol.length);
            const selected=realSymbol[RandomIndex];
            reals[i].push(selected);
            realSymbol.splice(RandomIndex,1);
            
        }
    }
    // console.table(reals);
    return reals;
}


//transposing the matrix



let Balance=deposit();
const LinesNumber=line();  
const bet=betAmount(Balance,LinesNumber);  
const lotterySpin = spin();

const won=win(lotterySpin);















//not working
// const win=(reals)=>{
//     for (let i = 0; i < ROWS; i++) {
//         const symbol=reals[0][i];
//         let allSame=true;
//         for (let j = 1; j < COL; j++) {
//             if(reals[j][i]!==symbol){
//                 allSame=false;
//                 break;
//             }

//             if(allSame){
//                 console.table(reals[j][i]);
//                 break;
//             }else{
//                 console.log("lost it ");
//                 return "You lost";
//             }
            
//         }
        
//     }
// }