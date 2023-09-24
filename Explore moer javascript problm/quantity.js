const shopping = [

      { name: 'pant', price: 3300, quantity: 2},
      { name: 'shirt', price: 2200, quantity: 2},
      {name: 'show', price: 1500, quantity: 2},
      { name: 'belt', price: 700, quantity: 2},
 ];
 function totalCost(products){
       let sum = 0;
       for(let i = 0; i< products.length; i++){
             const product =products[i];
             const totalProduct = product.price*  product.quantity;
             sum = sum + totalProduct;
        
       }
       return sum;
 }
 
 const expense = totalCost(shopping);
 console.log('total shopping const:',expense);