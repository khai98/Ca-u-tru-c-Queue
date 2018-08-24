var Queue = function () {
    this.dataStore = [];

    this.enqueue = function (element) {
        this.dataStore.push(element);
    };

    this.dequeue = function () {
        return this.dataStore.shift();

    };

    this.front = function () {
        return this.dataStore[0];
    };

    this.back = function () {
        return this.dataStore[this.dataStore.length-1];
    };

    this.toString = function () {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;

    };

    this.empty = function () {
        if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }

    }
};

// test program

var q = new Queue();

q.enqueue("Meredith" + "</br>");
q.enqueue("Cynthia" + "</br>");
q.enqueue("Jennifer" + "</br>");
document.write(q.toString());
q.dequeue();
document.write(q.toString());
document.write("Front of queue: " + q.front());
document.write("Back of queue: " + q.back());