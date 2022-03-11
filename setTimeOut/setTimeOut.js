// This is for set Time Out Practice
const setTime = document.getElementById('btn-one');
const setTimeTwo = document.getElementById('btn-two');
const setTimeOut = document.getElementById('btn-three');
setTime.addEventListener('click', (e) =>{
  e.preventDefault();
  saveData();
});
function saveData(){
  const message = document.getElementById('warning-one');
  message.innerText = 'Success your are selected';
  message.classList.add('btn');
  setTimeOut(() => {
    message.innerText = '';
    
    message.classList.remove('btn');
  }, 3000)
}