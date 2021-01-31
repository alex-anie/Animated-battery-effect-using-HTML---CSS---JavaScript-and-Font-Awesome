const battery = document.querySelector('#batteryIcon');
const text = document.querySelector('.inserted-text');


const totalChargeTime = 5000; // 5 Seconds
const barChargeTime = 5000 / 5;

// animatedBar();


function animateBattery(){
  battery.innerHTML = '&#xf244;';
  	text.innerHTML = 'charging...';
  setTimeout(()=> {
  	battery.innerHTML = '&#xf243;';
  }, barChargeTime);

  setTimeout(()=> {
  	battery.innerHTML = '&#xf242;';
  }, barChargeTime * 1);

   setTimeout(()=> {
  	battery.innerHTML = '&#xf241;';
  }, barChargeTime * 2);

    setTimeout(()=> {
  	battery.innerHTML = '&#xf240;';
  	text.innerHTML = 'charged!';

  }, barChargeTime * 3);
}

animateBattery();

setInterval(animateBattery, totalChargeTime);