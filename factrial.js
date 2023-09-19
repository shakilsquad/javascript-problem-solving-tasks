// function factrial(numbers) {
      
//       for( let i = numbers; i >= 1; i--){
//       console.log(i);
//       }
// }
// factrial(7);
function factrial(numbers) {
      let result = 1
      for(let i = numbers; i >=1; i--){
            result = result *1;
            console.log(i);
      }
      return result;

}
const numbers = 6;
const fact = factrial(numbers);
console.log(`factrial of`,numbers, fact);