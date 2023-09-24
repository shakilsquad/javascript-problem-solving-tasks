const shopping = [

     { name: 'shirt', price: 2200},
     { name: 'pant', price: 3300},
     {name: 'show', price: 1500},
     { name: 'belt', price: 700}
];
function totalCost(products){
      let sum = 0;
      for(let i = 0; i< products.length; i++){
            const product =products[i];
            sum = sum + product.price;
       
      }
      return sum;
}

const expense = totalCost(shopping);
console.log('total shopping const:',expense);