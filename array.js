const country = 'bangladesh';
const age = 22;
const isIndependent = true;
const student = { name:'shakil', age:'22',depermant:'computer'};
const friends =[20,30,5,80,55,66]; 
function add(num1 , num2) {
      return num1, num2;
}
//
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(Array.isArray(friends));
console.log(typeof add);
//
console.log(friends.includes((30)));
console.log(friends.includes((300)));
// if test 
if (friends.indexOf(225) !== -1) {
      
}
// concat-1 
const newFriends =[12,6,55,88,99,];
const allFriend =newFriends.concat(friends);
console.log(allFriend);
// concat-2
const myFriend = [99,88,77,444,66,55,44,888];
const allMyFriends =myFriend.concat(friends , newFriends);
console.log(allMyFriends);
