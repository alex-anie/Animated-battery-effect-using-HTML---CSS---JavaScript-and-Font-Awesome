const battery = document.querySelector('#batteryIcon');
const text = document.querySelector('.inserted-text');
console.log(battery);

const totalTimeCharge = 5000 // 5 Seconds
const barChargeTime = 5000 / 5; // 1 Seconds

function animateBattery(){
  battery.innerHTML = '&#xf244;';
  text.innerHTML = 'charging...';

  setTimeout(()=>{
  battery.innerHTML = '&#xf243;';
  },barChargeTime);

  setTimeout(()=>{
    battery.innerHTML = '&#xf242;';
    },barChargeTime * 1);

  setTimeout(()=>{
      battery.innerHTML = '&#xf241;';
     },barChargeTime * 2);

  setTimeout(()=>{
        battery.innerHTML = '&#xf240;';
        text.innerHTML = 'charged!';

    }, barChargeTime * 3);

}

// fall the function
animateBattery();

// Repeat the function continuesly
setInterval(animateBattery, totalTimeCharge);
  