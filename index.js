//let inputUnit = 2
let newUnit = document.getElementById("input-unit")
let button = document.querySelector("#conversion-btn")
let lengthResult = document.querySelector(".length-result");
let volumeResult = document.querySelector(".volume-result");
let massResult = document.querySelector(".mass-result");


// button.addEventListener("click", function() 
newUnit.addEventListener("input", function() {

let meterCalc = (newUnit.value * 3.28084).toFixed(3)
let feetCalc = (newUnit.value / 3.28084).toFixed(3)
lengthResult.textContent = newUnit.value + " Meter" + " = " + meterCalc + " Feet" + "  |  " + newUnit.value + " Feet" + " = " + feetCalc + " Meter"

let literCalc = (newUnit.value / 3.78541).toFixed(3)
let gallonCalc = (newUnit.value * 3.78541).toFixed(3)
volumeResult.textContent = newUnit.value + " Liter" + " = " + literCalc + " Gallon" + "  |  " + newUnit.value + " Gallon" + " = " + gallonCalc + " Liter"

let kiloCalc = (newUnit.value / 2.20462).toFixed(3)
let poundCalc = (newUnit.value * 2.20462).toFixed(3)
massResult.textContent = newUnit.value + " Kilo" + " = " + kiloCalc + " Pound" + "  |  " + newUnit.value + " Pound" + " = " + poundCalc + " Kilo"

})