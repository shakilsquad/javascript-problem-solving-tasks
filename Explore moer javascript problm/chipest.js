const phones =[
      {name: 'iPhon', price: 20000 , storage: '32gb' ,camera: 16, color : 'black' },
      {name: 'samsung', price: 10000 , storage: '32gb' ,camera: 16, color : 'black' ,} ,
      {name: 'xiome', price: 20010 , storage: '32gb' ,camera: 16, color : 'black' ,} ,
      {name: 'nokia', price: 20020 , storage: '32gb' ,camera: 16, color : 'black' ,} ,
      {name: 'realme', price: 10020 , storage: '32gb' ,camera: 16, color : 'black' ,} ,
      {name: 'vivo', price: 10000 , storage: '32gb' ,camera: 16, color : 'black' ,} ,
      {name: 'banglink', price: 1500 , storage: '32gb' ,camera: 16, color : 'black' ,} ,
      
]
function chipestPhon (phones){
      
      let chipest = phones[0];
      for (let i = 0; i < phones.length; i++) {
            const phon = phones[i];
           if(phon.price < chipest.price){
            chipest = phon;
           }
      }
      return chipest;
}
const mySecletion = chipestPhon(phones);
console.log(mySecletion);