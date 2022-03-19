const latters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count = {};

latters.forEach(item => {
  if(count[item]){
    count[item]++;
  }else{
    count[item] = 1;
  }
});
console.log(count);