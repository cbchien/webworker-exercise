var workerFor = new Worker('../workers/for.js');
// listen to message event of worker
workerFor.addEventListener('message', function(event) {
    var div = document.getElementById('result');
    div.innerHTML = 'message received => ' + event.data;
    workerFor.terminate();
});

// listen to error event of worker
workerFor.addEventListener('error', function(event) {
    console.error('error received from workerFor => ', event);
});

// load results from web worker
function loadResult() {
    // add loading text until `message` event listener replaces it
    var div = document.getElementById('result');
    div.innerHTML = 'loading...';
    // emit message event to worker
    workerFor.postMessage(null); // we don't need payload here
};