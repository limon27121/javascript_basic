//back one page
function back() {
    window.history.back();
}

//back number of page that you gave
function backTo(n) {
    window.history.go(n);
}

//forward 1 page
function forward() {
    window.history.forward();
}

//give history of browser
function getHistory() {
    alert(window.history.length);
}
