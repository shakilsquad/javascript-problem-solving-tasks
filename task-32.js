// function reversString(text) {
//      for (let i = 0; i < text.length; i++) {
//       const element = text[i];
//       console.log(element);
      
//      } 
// }

// const myString = 'I am a good boy and good student';
// const revers = reversString(myString);
//
function reversString(text) {
      // for (let index = 0; index < array.length; index++) {}
      let  reversed= ' ';
     for (let i =text.length-1 ; i>=0; i--) {
      const element = text[i];
      reversed = reversed + element;
      console.log(element , reversed);
     } 
     return reversed;
}

const myString = 'I am a good boy';
const revers = reversString(myString);
console.log(revers);