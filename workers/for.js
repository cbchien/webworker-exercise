self.onmessage = function(event) {
    // large for loop just to see the parallel programming
    var x = 0;
    for (var i = 0; i < 200000000; i++) {
        x = x + i;
    }
    self.postMessage(x);
}