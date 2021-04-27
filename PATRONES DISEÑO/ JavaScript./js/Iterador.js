//-> Iterator



let Iterator = function (items) {
    this.index = 0;
    this.items = items;
}

Iterator.prototype = {
    first: function () {
        this.reset();
        return this.next();
    },
    next: function () {
        return this.items[this.index++];
    },
    hasNext: function () {
        return this.index <= this.items.length;
    },
    reset: function () {
        this.index = 0;
    },
    each: function (callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

// log helper

let log = (function () {
    let log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run() {
    let items = ["Justin", 1, "BTS", false, "IPhone"];
    let iter = new Iterator(items);

    // Usandor for
    for (let item = iter.first(); iter.hasNext(); item = iter.next()) {
        log.add(item);
    }
    log.add("");

    // Usando Each
    iter.each(function (item) {
        log.add(item);
    });

    log.show();
}

run();
