/* ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
*/
const stringType ='i Am Shakil Mia';
const  booleanType =  true ; 
const numberType = [10, 20, 20 ];
console.log(typeof stringType);
console.log(typeof booleanType);
console.log(typeof numberType);
/* ===================================================*/
/*
২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
*/

let friendsname =['shakil','rana','mahata'];
const friendsnames = ['shakil','rana','mahata'];
 console.log(friendsname);
/* ===================================================*/

/*
৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। 
অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। 
তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 
*/

const result1 = 50;
const result2 = 55;
/* const finalResult = (result1 + result2);
const finalResult = (result1 - result2);
const finalResult = (result1 * result2);
const finalResult = (result1 / result2);
const finalResult = (result1 % result2);
*/
// console.log(' finalResult:',finalResult);
/* ===================================================*/
/*

৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
*/
const mark1 = 10;
const mark2 = 120;
if(mark1 < mark2){
      console.log('mark-2 lergest Number: ',mark2 )
}
else if(mark1 > mark2){
      console.log('mark- lergest Number: ',mark1 )
}
else{
      console.log('invalid number!, plz right number' )

}
//
/*
৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
*/
const isRain = true;
const isumbrela = true;
if(isRain == false && isumbrela == true ){
      console.log( 'ok I am going to school');
}
else if(isRain == true && isumbrela == true){
      console.log('No, I am not going to school');
}
else{
      console.log('Plz searce your umbrela');
}
/* ===================================================*/
/*
৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
*/

const footbaal = false;
const mony = false;

if( footbaal == true  &&  mony == true){
      console.log('cholo football khal ta jay');
}
else if(footbaal == true && mony == false){
      console.log('ajk football khala hoba na');
}
else{
      console.log('aga football & taka manag koro baba');
}
/* ===================================================*/

/*
৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
*/

let number = 7;
while (number <= 19) {
  if (number % 2 !== 0) {
    console.log(number);
  }
  number++;
}
/* ===================================================*/

/*
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
*/

var array = ['shakil', 'rana','kawser','mahatab','nadim','nahid'];
console.log(array.length);
var chang= array[3] = 'azia';
console.log(chang); 
array.push('shoron','vatija');
console.log(array);
array.pop();
console.log(array);


/* ===================================================*/

/*
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
*/
const Array = ['shakil', 'rana','kawser', 'azia','nadim', 'nahid','shoron'];
for (let i = 0; i < Array.length; i++) {
      console.log(Array[i]);
}
/* ===================================================*/

/*
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
*/













/* ===================================================*/
/*
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
/*













/* ===================================================*/
/*
১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
*/













/*

উপরের ১২টা কাজের মধ্যে তুমি যদি ৯টা থেকে ১০ টা বা তার বেশি কাজ করে ফেলতে পারো। তাহলে তোমার বেসিক কনসেপ্ট ঠিক আছে। যদি ৫টা থেকে ৯টা অর্থাৎ ৫ টা, ৬টা, ৭টা বা ৮টা করতে পারো। তাহলে তোমাকে হার্ডওয়ার্ক করতে হবে। একটু বেশি সময় দিতে হবে। আর তুমি যদি ৫টা এর কম। অর্থাৎ ০, বা ১টা বা ২টা বা ৩টা বা ৪টা পেয়ে থাকো তাহলে তোমাকে ডিফারেন্টভাবে জাভাস্ক্রিপ্ট এ আরো সময় দিতে হবে। সেক্ষেত্রে তুমি আমাদের ইমেইল করে দিতে পারো web@programming-hero.com এ। তোমার ওভারঅল অবস্থা লিখে। আমরা তোমাকে স্পেশালভাবে তোমার সিচুয়েশন অনুসারে গাইডলাইন দিবো। 
*/