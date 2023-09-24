/*
1 . show output from: 1-50
2. if the number id divisible by  then of the number , show 'foo '.
3. if the number id divisible by 5 then of the number , show 'ber'.
4. if the number is divisible by both 3 and 5 then insted of the number show 'foobar'
*/

// for (let i = 1; i <= 50; i++) {
//       if((i % 3 === 0) || (i % 5 === 0)){
//             console.log('foober')
//       }
//       else if( i % 5 === 0){
//             console.log('ber');
//       }
//       else if (i % 3 === 0) {
//             console.log('foo');
//       }
//       else{
//             console.log(i)
//       }
      
// }
for (let i = 1; i <= 50; i++) {
      let output = "";
    
      if (i % 3 === 0) {
        output += "foo";
      }
    
      if (i % 5 === 0) {
        output += "ber";
      }
    
      console.log(output || i);
}
    