// somOffNumbers.js
let sum = 0;
for( let i = 0; i <= 7; i++){
      sum = sum+ i;
      console.log(i , sum);
}
function somOffNumbers(numbers) {
      let sum = 0;
      for( let i = 0; i <= numbers; i++){
            sum = sum+ i;
            console.log(i , sum);
      }
      return sum;
}