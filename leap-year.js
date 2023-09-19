// -----------------leap year in javascript
// function isLeapYear(year) {
//       return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// const year = 2024;
// if (isLeapYear(year)) {
//       console.log(`${year} is a leap year.`);
// } else {
//       console.log(`${year} is not a leap year.`);
// }

// function isLeapYear(year) {
//       const remainder = year % 4;
//       if(remainder === 0){
//             console.log('is years is a lipYears:',year)
//       }
//       else{
//             console.log('is years is not a lipYears:', year)
//       }
// }
// isLeapYear(1960);
// isLeapYear(1954);
//---------------
function isLeapYear(year) {
      const remainder = year % 4;
      if(remainder === 0){
           return true;
      }
      else{
            return false;
      }
}
const myLipYers = isLeapYear(1960);
console.log('my Lip Years',myLipYers);

const herLipyers = isLeapYear(1954);
console.log('her Lip Years',herLipyers);