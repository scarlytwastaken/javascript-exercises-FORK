const convertToCelsius = function(f) {

  inC = ((f - 32) * (5 / 9));
  return Math.round(inC * 10) / 10;

};

const convertToFahrenheit = function(c) {

  inF = (c * (9 / 5) + 32);
  return Math.round(inF * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
