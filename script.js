function getTime() {
    let dateObj = new Date;
    let minute = dateObj.getMinutes();
    let hour = dateObj.getHours();
    let second = dateObj.getSeconds()
    let amPm = 'AM';
    if (hour === 0) {
        hour = 12;
    } else if (hour === 12) {
        amPm = 'PM';
    } else if (hour > 12) {
        amPm = 'PM';
        hour = hour - 12;
    }
    return {
        hours : hour,
        minutes : minute,
        seconds : second,
        amPm : amPm
    }
}

function moveSeconds(seconds) {
    let secondsHand = document.getElementById('seconds-hand');
    secondsHand.style.rotate = seconds*6 + 'deg';
}
function moveMinutes(minutes) {
    let minHand = document.getElementById('minutes-second')
    minHand.style.rotate = minutes*6 + 'deg';
}

function moveHours(hours , minutes) {
    let hourHand = document.getElementById('hours-hands');
    calcRotate = (hours * 30) + (minutes * 0.5);
    hourHand.style.rotate = calcRotate + 'deg';
}


function updateTime() {
    let time = getTime();
    let seconds = time.seconds;
    let minutes = time.minutes;
    let hours = time.hours;
    let amPm = time.amPm
    moveSeconds(seconds);
    moveMinutes(minutes);
    moveHours(hours , minutes)
    updateDigitalClock(seconds , minutes , hours , amPm)
}

setInterval(() => {
    updateTime()
}, 1000);

function updateDigitalClock(seconds , minutes , hours , amPm) {
    let digitalClock = document.querySelector('#digital-clock p');
    hours = hours.toString().padStart(2 , '0');
    minutes = minutes.toString().padStart(2 , '0');
    seconds = seconds.toString().padStart(2 , '0');
    digitalClock.textContent = `${hours}:${minutes}:${seconds} ${amPm}` 
}
