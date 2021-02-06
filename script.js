const newYears = '27 Nov 2021';

const monthEl = document.getElementById('month'),
    dayEl = document.getElementById('day'),
    hourEl = document.getElementById('hour'),
    minEl = document.getElementById('minute'),
    secEl = document.getElementById('second');

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const months = Math.floor(totalSeconds / 3600 / 24 / 30);
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    monthEl.innerHTML = formatTime(months);
    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);