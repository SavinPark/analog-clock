const AnalogClock = $container => {
  // do something!

  let hand_hour = '<div class="hand hour"></div>';
  let hand_minute = '<div class="hand minute"></div>';
  let hand_second = '<div class="hand second"></div>';
  let inner = '';

  for (let i = 1; i <= 12; i++) {
    inner += `<div class="time time${i}">|</div>`;
  }
  inner += hand_hour;
  inner += hand_minute;
  inner += hand_second;
  $container.innerHTML = inner;

  setInterval(() => {
    let now = new Date();
    let second = now.getSeconds();
    let secondAngle = second * 6;
    let minute = now.getMinutes();
    let minuteAngle = minute * 6;
    let hour = now.getHours();
    let hourAngle = (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;

    document.querySelectorAll('.second').forEach(ss => ss.style.setProperty('--deg', secondAngle));
    document.querySelectorAll('.minute').forEach(mm => mm.style.setProperty('--deg', minuteAngle));
    document.querySelectorAll('.hour').forEach(hh => hh.style.setProperty('--deg', hourAngle));
  }, 1000);

};

export default AnalogClock;
