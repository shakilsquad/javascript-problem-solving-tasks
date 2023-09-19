// function isEven(number) {
//       const even = number % 2;
//       if(even ==  0){
//             console.log('is even number');
//       }
//       else{
//             console.log('is odd number');
//       }
// }
// isEven(5)
// isEven(10)
// odd number
// function isOdd(number) {
//       const odd = number % 2;
//       // return odd;
//       if ( odd === 0){
//             console.log('is odd number');
//       }
//       else{
//             console.log('is even number');
//       }
// }
// isOdd(9)
// isOdd(98)
// function isOdd(number) {
//       const odd = number % 2;
//       // return odd;
//       if ( odd === 0){
//             return true;
//       }
//       else{
//             return false;
//       }
// }
// myNumberIsEven = isOdd(901);
// console.log(myNumberIsEven);
// herNumberIdEven =  isOdd(98)
// console.log(herNumberIdEven);
//
function isEvenOrOdd(number) {
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
    
    // Example usage:
    const num = 7;
    const result = isEvenOrOdd(num);
    console.log(`${num} is ${result}`);
    