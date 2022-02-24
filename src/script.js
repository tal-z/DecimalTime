const totalSecondsPerDay = 10*100*100;
const oneSecond = 864;
let clockFace = document.getElementById("clockFace");

class decimalTime {
    constructor() {
      this.nowDecimalSeconds();
      this.seconds = Math.floor(Math.abs(this.elapsed_decimal_seconds) % 100);
      this.minutes = (Math.floor(this.elapsed_decimal_seconds % 10000) - this.seconds)/100;
      this.hours = Math.floor(this.elapsed_decimal_seconds/(100 * 100));
      this.elapsed_time = 0;
    }

    nowDecimalSeconds() {
        var seconds = new Date().getTime() / 1000;
        var d = new Date();
        d.setHours(0,0,0,0);
        var yesterday_seconds = d.getTime() / 1000;
        var elapsed_fraction = (seconds - yesterday_seconds)/(60 * 60 * 24);
        this.elapsed_decimal_seconds = elapsed_fraction * totalSecondsPerDay;
    }

    increment() {
        this.elapsed_decimal_seconds += 1;
        this.elapsed_time += 1;
        if (this.elapsed_time >= 100 ) {
            this.nowDecimalSeconds();
            this.elapsed_time = 0;
            const setClockFace = setTimeout(() => {
                clockFace.style.setProperty("--setTimeHour", dt.hours);
                clockFace.style.setProperty('--setTimeMinute', dt.minutes);
                clockFace.style.setProperty('--setTimeSecond', dt.seconds-1);
            }, oneSecond);
        }
    }

    now() {
        this.seconds = Math.floor(Math.abs(this.elapsed_decimal_seconds) % 100);
        this.minutes = (Math.floor(this.elapsed_decimal_seconds % 10000) - this.seconds)/100;
        this.hours = Math.floor(this.elapsed_decimal_seconds/(100 * 100));
        return this
    }

    toString() {
        return this.hours.toString().padStart(2, '0') +":" + this.minutes.toString().padStart(2, '0') + ":" + this.seconds.toString().padStart(2, '0')
    }
  }


const dt = new decimalTime();
let digitalClock = document.getElementById("digitalClock");


const dt_interval = setInterval(() => {
    digitalClock.innerHTML = dt.now().toString();
    dt.increment();
}, oneSecond);

const setClockFace = setTimeout(() => {
    clockFace.style.setProperty("--setTimeHour", dt.hours);
    clockFace.style.setProperty('--setTimeMinute', dt.minutes);
    clockFace.style.setProperty('--setTimeSecond', dt.seconds-1);
}, oneSecond);

