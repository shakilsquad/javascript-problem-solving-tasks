// the tollagest number 
function maxInArray (number){
      let largest = number[0];

      for (let i = 0; i < number.length; i++) {
            const index = i;
            const element = number[index];
            if( element > largest){
                  largest = element;
            }
      }
      return largest;
}
const heights = [130,150,140,160,180,190,822];
const tallest = maxInArray(heights);
console.log('the tallest number',tallest);
//=-----------
const tallestNumber =190;
if( tallestNumber <= 120){
      console.log(120,'the tallest number')
}
else if( tallestNumber <= 150){
      console.log(150,'the tallest Number')
}
else if(tallestNumber <= 170){
      console.log(170,'the tallest Number')
}
else if(tallestNumber <= 190){
      console.log(190,'the tallest Number')
}
else{
      console.log('the short number')
}