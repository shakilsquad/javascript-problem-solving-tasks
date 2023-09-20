// nastate loop 
var age = 115;
var hasLicence = false;

if (age >= 18) {
      if(hasLicence == true){
            console.log('You addalt has licence')
      }
      else{
            console.log('addalt but not licence')
      }
}
else{
      console.log('tume akhono baccha aso')
}
// ternary poerator 
age >= 18 ? hasLicence == true? console.log('You addalt has licence') :  console.log('addalt but not licence')  :console.log('tume akhono baccha aso')