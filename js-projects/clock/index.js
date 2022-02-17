let a, date, time;
setInterval(() => {
    a = new Date();
    date = a.toDateString();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br> on " + date;

}, 1000);