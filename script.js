let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let button= document.querySelector('.submit');
let error= document.querySelector('.error');
error.style = 'color: red';


button.addEventListener('click', function(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6cd6dde93949783312dec95c211ea80e`)
.then(response => response.json())
.then(data => {

  main.innerHTML = data.name;
  desc.innerHTML = data.weather[0].main;
  temp.innerHTML = ((data.main.temp)-273.15).toFixed(2) +' &#8451;';
  sunrise.innerHTML = '<b>Sunrise:</b>  '+utcTime(data.sys.sunrise);
  sunset.innerHTML = '<b>Sunset:</b>  '+utcTime(data.sys.sunset);
  input.value ="";

  function utcTime(value) {
    let date = new Date(value * 1000);
    let time = date.toLocaleTimeString();
    return time;
  }
})
.catch(err => error.innerHTML = "ERROR! Choose wiser!");
})
