// 3 item ar lergest point 
var first = 45;
var second = 55;
var third = 50;

if (first > second && first > third) {
      console.log( first,'in the leargest number')
}
else if(second > first && second > third ){
      console.log(second,'in the leargest number')
}
else{
      console.log(third,'in the leargest number')
}
// 3 items in the min number
var item1 = 50;
var item2 = 40;
var item3 = 45;

 if (item1 < item2 & item1 < item3) {
       console.log(item1,'the small number')
 }
else if(item2 < item1 && item2 < item3){
      console.log(item2,'the small number')
}
else{
      console.log(third,'the small number')
}
//---------
var item1 = 50;
var item2 = 60;
var item3 = 45;
const max = Math.max( item1 , item2 ,item3);
console.log(max,':the largest number');
// const min = math.min(item1, item2,item3);
// console.log(min,":the small number")
const maxs = Math.min( item1 , item2 ,item3);
console.log(maxs,':the largest number');