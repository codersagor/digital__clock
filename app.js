function showTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formatHours = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Pad with leading zeros
    hours = addZero(hours);
    const paddedMinutes = addZero(minutes);
    const paddedSeconds = addZero(seconds);

    // Display the time in the HTML element
    const clock = document.getElementById('clock');
    clock.innerHTML = `${hours} : ${paddedMinutes} : ${paddedSeconds} ${formatHours}`;
}

function addZero(time) {
    return time < 10 ? `0${time}` : time;
}

// Call the showTime function once to initialize the clock
showTime();

// Call the showTime function every 100 milliseconds to update the clock
setInterval(showTime, 100);
