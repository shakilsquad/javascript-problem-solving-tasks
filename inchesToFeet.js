//------------------- inces to fit -----------------
const myIncey = 12;
const myFite = myIncey /12;
// console.log(myFite);

const dadaincey = 156;
const dadaFite = dadaincey / 12;
// console.log('my dada fit :',dadaFite);

function incToFite(inches) {
      const feet =inches / 12;
      return feet;
}
      const dadaincey = 194;
      const dadaFite = incToFite(dadaincey);
      // console.log('dada fite:',dadaFite.toFixed(2),'-inces');

//
function dadyfite(fits) {
      const fit = fits /12;
      return fit;
}

const dadyincey = 140;
const dadyfits = dadyfite(dadyincey);
// console.log('dady fits:',dadyfits.toFixed(2),'-inces' );




function inchesToFeet(inches) {
      return inches / 12;
    }

    const inches = 24;
    const feet = inchesToFeet(inches);
    console.log(`${inches} inches is equal to ${feet.toFixed(2)} feet`);
    