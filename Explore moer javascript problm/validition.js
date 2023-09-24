function add(num1 , num2 , num3) {
      console.log(num1 , num2 , num3);
      if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
            return 'Plz Enter Your number'
      }
      return num1 + num2 + num3;

}
const addNumber =add(12 , '90' ,57);
console.log('total Number :',addNumber);

function multiply(nun1 , num2 ) {
      console.log(nun1, num2)
      return nun1 * num2;

}

const avge = multiply( 35, 25);
console.log('total points:',avge);