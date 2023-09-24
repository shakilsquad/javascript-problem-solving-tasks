/*
1. fixed: per items wood requirments 
1. chair ---> 5 cft
1. table  ---> 15 cft
1. bed  ---> 55 cft
 */
function calecletWood ( chairQuantity , tableQuantity, bedQuantity) {
      const perChairWood = 5;
      const perTableWood = 15;
      const perBedWood =25;

      const chairWood = chairQuantity * perChairWood;
      const tableWood = tableQuantity * perTableWood;
      const bedWood = bedQuantity * perBedWood;

      const totalWood = chairWood + tableWood + bedWood;
      return totalWood;

}
const totalWood = calecletWood( 3 , 8, 15 );
console.log(totalWood);