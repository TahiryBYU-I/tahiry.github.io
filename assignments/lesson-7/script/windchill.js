/* The formula to calculate the wind chill factor is LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}
f = 35.74 + 0.6215 t − (35.75 s ^ 0.16) + (0.4275 t s ^ 0.16)
, where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour. */

function getTemp(){
  x = parseInt(document.getElementById('temperature').innerHTML);
  return x;
}
var t = getTemp();

function getWindSpeed(){
  x = parseInt(document.getElementById('windspeed').innerHTML);
  return x;
}
var s = getWindSpeed();

function getWindChill(temp,wind){
  x = (0.0817*(3.71*(Math.pow(wind, 0.5))+5.81-0.25*wind)*(temp-91.4)+91.4);
  document.getElementById('windchill').innerHTML = parseInt(x);
  console.log("Temperature is " + temp + " ºF");
  console.log("Wind Speed is " + wind + " mph");
  console.log("Wind Chill is " + x + " ºF");
}

getWindChill(t,s);
