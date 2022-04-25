//let inputUnit = 2
let newUnit = document.getElementById("input-unit")
let button = document.querySelector("#conversion-btn")
let lengthResult = document.querySelector(".length-result");
let volumeResult = document.querySelector(".volume-result");
let massResult = document.querySelector(".mass-result");


button.addEventListener("click", function() {

let meterCalc = (newUnit.value * 3.28084).toFixed(3)
let feetCalc = (newUnit.value / 3.28084).toFixed(3)
let lengthTemplate = newUnit.value + " Meter" + " = " + meterCalc + " Feet" + "  |  " + newUnit.value + " Feet" + " = " + feetCalc + " Meter"
lengthResult.textContent = lengthTemplate

let literCalc = (newUnit.value / 3.78541).toFixed(3)
let gallonCalc = (newUnit.value * 3.78541).toFixed(3)
let volumeTemplate = newUnit.value + " Liter" + " = " + literCalc + " Gallon" + "  |  " + newUnit.value + " Gallon" + " = " + gallonCalc + " Liter"
volumeResult.textContent = volumeTemplate

let kiloCalc = (newUnit.value / 2.20462).toFixed(3)
let poundCalc = (newUnit.value * 2.20462).toFixed(3)
let massTemplate = newUnit.value + " Kilo" + " = " + kiloCalc + " Pound" + "  |  " + newUnit.value + " Pound" + " = " + poundCalc + " Kilo"
massResult.textContent = massTemplate

})