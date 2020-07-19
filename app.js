function showTime() {
    let date = new Date();
    let hourss = date.getHours(); // 0-23
    let miniutes = date.getMinutes(); // 0 - 60
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hourss);
    let hours = checkTime(hourss);

    hours = addZero(hours)
    miniutes = addZero(miniutes)
    seconds = addZero(seconds)

    document.getElementById('clock').innerHTML = `${hours} : ${miniutes} : ${seconds} : ${formatHours}`
    
}

function convertFormat(time) {
    let format = 'AM';
    if(time >= 12) {
        format = 'Pm'
    }else {
        format = 'AM'
    }

    return format;
}

function checkTime(time) {
    if(time > 12) {
        time = time - 12;
    };

    if(time === 0) {
        time = 12;
    }
    return time;
}

function addZero(time) {
    if (time < 10){
        time = "0" + time
    }
    return time;
}
showTime()

setInterval(showTime,100)