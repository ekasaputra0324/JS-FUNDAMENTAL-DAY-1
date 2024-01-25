let index = 0;
let btn =  document.getElementById('alert').textContent = 'TOMBOL : ' + index
function btnAlert(){
    let countIndex = index += 1
    document.getElementById('alert').textContent = 'TOMBOL : ' + countIndex
}