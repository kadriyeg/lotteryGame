

console.log("welcome to the lottery game");
let lotteryNumber = (Math.random() * 90) +10;
lotteryNumber= Math.floor(lotteryNumber);
let userNumber= parseInt(prompt("enter your number : "));
console.log(`Lottery number ${lotteryNumber} user's number ${userNumber}`);

if (lotteryNumber === userNumber){
    console.log("congrats,you've won the lottery, 10K!");
}
lotteryNumberUnitDigit = lotteryNumber % 10 ;
lotteryNumberTensDigit = Math.floor(lotteryNumber / 10) ;
userNumberUnitDigit = userNumber % 10;
userNumberTensDigit = Math.floor (userNumber / 10);

console.log(`lotter number's unit digit ${lotteryNumberUnitDigit},
lottery number's tens digit ${lotteryNumberTensDigit} ,
user number's unit digit ${userNumberUnitDigit} tens digit ${userNumberTensDigit}`);
if (lotteryNumberUnitDigit  === userNumberUnitDigit || lotteryNumberTensDigit=== userNumberTensDigit) {
    console.log("you've won 1K");
}
else if (lotteryNumberTensDigit===userNumberUnitDigit || lotteryNumberUnitDigit===userNumberTensDigit) {
    console.log("you've won 1K");
}
else if(lotteryNumberTensDigit=== userNumberUnitDigit && lotteryNumberUnitDigit === userNumberTensDigit) {
    console.log("you've won 5K");
}
else
console.log("you haven't won any")