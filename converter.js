let input = document.querySelector(".input");
let convertBtn = document.querySelector(".convert-btn");
let resultC = document.querySelector(".resultc");



function toCelsius(fa) {
    return (5/9) * (fa-32);
  }
  


convertBtn.addEventListener("click",function(){
    let fa = parseFloat(input.value);
    let c = toCelsius(fa);
    resultC.textContent = `${c} °C`;
});


function toKm (mi) {
    return (mi) * (1.6);
}

let inputKm = document.querySelector(".inputKm");
let converBtnKm = document.querySelector(".convert-btn-km");
let resultKm = document.querySelector(".resultkm");

converBtnKm.addEventListener("click", function(){
    let mi = parseFloat(inputKm.value);
    let km = toKm(mi);
    resultKm.textContent= `${km} KM`;
})

