// getSumOfArrayOddNumbers.js
function getSumOfArrayOddNumbers(numbers) {
      for(let i = 0; i < numbers.length; i++){
            const index = i;
            const element = numbers[index];
            if( element % 2 === 0){
            console.log(index , element);
            }
      }
}


const myNumber = [12,52,62,4,2,6,];
getSumOfArrayOddNumbers(myNumber);
