const number = [55,666,62,60,30,60,8,40,111,111,62,65,88,22,55,666,];
function toTheNumber(numberS) {
      let unipue = [];
      for(let i = 0;  i< numberS.length; i++){
           const name =numberS[i];
          if(unipue.includes(name) === false){
            unipue.push(name);
          }
      }
      return unipue;
}
const removeNumber= toTheNumber(number);
console.log(removeNumber);
