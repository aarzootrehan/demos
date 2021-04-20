var worker;
function startTheWorker() {
    worker = new Worker('worker-thread.js')
    worker.onmessage = function(event) {
        document.getElementById("result").innerHTML = event.data;

    }
}

function stopWorker() {
    if(worker) {
        worker.terminate();
        worker = undefined;
    }
}

function runWithoutWorker() {
    var i =0;
   while(true) {
       document.getElementById("result").innerHTML = i;
       i++;
    }
}