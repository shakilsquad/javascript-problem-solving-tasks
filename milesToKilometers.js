//----------------------- milesToKilometers -----------------
function milesToKilometers(miles) {
      return miles * 1.60934;
    }
const miles = 10;
const kilometers = milesToKilometers(miles);
 console.log(`${miles} miles is equal to ${kilometers.toFixed(2)} kilometers`);
//.
function mileToKlm(mile) {
      const mil = mile * 1.60936;
      return mil;

}
const mile = 50;
const kilometer =mileToKlm(mile);
console.log(`${mile} miles is equle to ${kilometer.toFixed(2)} kilomiters`);

