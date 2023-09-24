/*
1. fixed: per items shoping  requirments 
1. chal  ---> 5 kg 
1. dal   ---> 15 kg 
1. sold  ---> 55 kg 
 */

function shopingCalcluter (chalQuntity , dalQunutity, soldQuaunitiy) {

      const perChal = 65; // taka 
      const perDal = 120; // taka 
      const perSold = 40; // taka

      const chal = perChal * chalQuntity;
      const dal = perDal * dalQunutity;
      const sold = perSold * soldQuaunitiy;

      const totalShopingItems = chal + dal + sold;
      return totalShopingItems;

}
const totalShoping =shopingCalcluter( 15 , 5 , 3);
console.log('total shoping cost :',totalShoping ,'-Taka');
