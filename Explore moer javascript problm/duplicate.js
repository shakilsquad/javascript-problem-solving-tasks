const  names = ['shakil ','rana','kaswar','mahata','obydule','ikram','nahid','aziz','shakil ','rana','kaswar','mahata','obydule','nadim','kadim','ikram','nahid'];


function removeDuplicate(names){
      let unique =[];
      for(let i = 0; i< names.length; i++){
            const name = names[i];
            if(unique.includes(name) === false){
                  unique.push(name);
            }
      }
      return unique;
}
const removeName = removeDuplicate(names);
console.log(removeName);