var i =0;
function timerCount() {
    while(true) {
        i++;
        postMessage(i);
    }
}

timerCount();