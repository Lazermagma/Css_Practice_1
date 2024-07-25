onInactive(15000, function () {
    alert('Inactive for 15 seconds');
    window.location.replace("http://www.w3schools.com");


});

function onInactive(ms, cb) {

    var wait = setTimeout(cb, ms);

    document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
        clearTimeout(wait);
        wait = setTimeout(cb, ms);

    };
}