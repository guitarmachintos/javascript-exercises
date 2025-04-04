function round2Dec(n) {
  return Math.round(n * 10) / 10;
}

const convertToCelsius = function(fTemp) {
  return round2Dec((fTemp - 32) * 5 / 9);
};

const convertToFahrenheit = function(cTemp) {
  return round2Dec((cTemp * 9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
