//---------------------------------- sumArrayNumbers
// function sumArrayNumbers(arr) {
//       let sum = 0;
//       for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//       }
//       return sum;
//     }
    
//     // Example usage:
//     const numbers = [1, 2, 3, 4, 5];
//     const totalSum = sumArrayNumbers(numbers);
//     console.log(`The sum of all numbers in the array is: ${totalSum}`);
    //

function getSumOfArray(numbers) {
      const oddNumbers=[];
      for(let i = 0; i < numbers.length; i ++){
            const index = 1;
            const element = numbers[index];
            if(element % 2 !== 0){
                  console.log(index ,element);
                  oddNumbers.push(element);
            }
      }
      return oddNumbers;
}

const myNumber = [12,52,62,4,2,6,];
const oddNumbers = getOddNumbersOfArray(myNumber);
console.log(oddNumbers);

const oddNumbersOfSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum',oddNumbersOfSum);