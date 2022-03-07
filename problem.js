// Problem solve one
const anaToVori = ana => {
  if(ana <= 0){
    console.log('Sorry boss set perject Number');
  }
  else{
    console.log(ana + 'Ana = ' + (ana / 16) +'Vori'); 
  }
}
anaToVori(0);
// Problem Two
const pandaCost = (singara, somucha, jilapi) => {
  const singaraPrice = singara * 7;
  const somuchaPrice = somucha * 10;
  const jilapiPrice = jilapi * 15;
   const totalPrice = (singaraPrice + somuchaPrice + jilapiPrice);
   console.log(`Total MRP = ${totalPrice}tk`);
}
pandaCost(2, 0, 2);

// Picnic Budget Three number Problem
function pricnicBudget(mamber) {
  const firstMambers = 100 * 5000;
  const secondMambers = 100 * 4000;
    if(mamber < 0 ){
      console.log('Sorry boss set Right Number');
    }
    else if(mamber > 0 && mamber <= 100){
      const result = mamber * 5000;
      console.log(result);
    } 
    else if(mamber > 100 && mamber <= 200){
      const result = (mamber - 100) * 4000 + firstMambers;
      console.log(result);
    } 
    else if(mamber > 200){
      const result = (mamber - 200) * 3000 + firstMambers + secondMambers;
      console.log(result);
    }
}
pricnicBudget(10);

// Number Four Problem solve
const oddNumber = ['makers', 'shihab', 'motior', 'saju', 'tarek', 'rased' ];
oddNumber.forEach(mamber => {
  const showNumber = mamber.length;
  if(showNumber % 2 !== 0){
    console.log(mamber);
  }
});
