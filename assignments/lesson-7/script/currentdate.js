function getDate(){
  var d = new Date();
  var dayName = new Array ("Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  document.querySelector('#date').innerHTML = dayName[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

getDate();
