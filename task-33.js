function reversWord(str) {
     const word = str.split(' ') 
     const result = [];
     for(let i = word.length-1; i>=0; i--){
      const element = word[i];
      result.push(element);
     }
     const revers =result.join(' ');
     return revers;

}
const myWord = 'i am a good student';
reversWord(myWord);