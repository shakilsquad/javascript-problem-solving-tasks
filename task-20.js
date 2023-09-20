var temperature = 25;
var isRainDay = true;
if(temperature >= 30){
      console.log('It Is A Hot Day');
      if ( isRainDay === true) {
            console.log('But It Is A Raining Day')
      }
      else{
            console.log('But Is Not Raining Day');
      }
}
else{
      console.log('It Is A Cole Day');
      if (isRainDay) {
            console.log('But It Is A Raining Day');
      }
      else{
            console.log('And It Is A Note Raining Day')
      }
}