// Problem solve one
const anaToVori = ana => {
  if(ana < 0){
    alert('Sorry boss set perject Number');
  }
  else{
    console.log(ana + 'Ana = ' + (ana / 16) +'Vori'); 
  }
}
anaToVori(10);
// Problem Two
const pandaCost = (singara, somucha, jilapi) => {
  const singaraPrice = singara * 7;
  const somuchaPrice = somucha * 10;
  const jilapiPrice = jilapi * 15;
   const totalPrice = (singaraPrice + somuchaPrice + jilapiPrice);
   console.log(`Total MRP = ${totalPrice}tk`);
}
pandaCost(2, 0, 2);