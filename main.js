const numberDisplay = document.querySelector("#number");
const toFahrenheitRadio = document.querySelector("#toFahrenheit");
const toCelsiusRadio = document.querySelector("#toCelsius");
const convertButton = document.querySelector("#convert");
const showResult = document.querySelector("#result");

console.log(numberDisplay);
console.log(toFahrenheitRadio);
console.log(toCelsiusRadio);
console.log(convertButton);
console.log(showResult);
// console.log(numberDisplay.value);


function toCelsius(temperature) {
    return (temperature * 9/5) + 32;
}

function toFahrenheit(temperature) {
    return (temperature - 32) * 5/9;
}

convertButton.addEventListener("click", () => {
    const givenTemp = parseFloat(numberDisplay.value);
  console.log(givenTemp);
  if (toCelsiusRadio.checked) {
    const result = toCelsius(givenTemp);
    showResult.textContent = `${result.toFixed(2)} °C`;
  } else if (toFahrenheitRadio.checked) {
    const result = toFahrenheit(givenTemp);
    showResult.textContent = `${result.toFixed(2)} °F`;
  } else {
    showResult.textContent = "Please select one!";
  }
});
