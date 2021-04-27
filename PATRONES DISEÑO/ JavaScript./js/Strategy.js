    // Strategy
    //Estrategia


let Shipping = function() {
    this.company = "";
};
 
Shipping.prototype = {
    setStrategy: function(company) {
        this.company = company;
    },
 
    calculate: function(package) {
        return this.company.calculate(package);
    }
};
 
let UPS = function() {
    this.calculate = function(package) {
        // calculando
        return "$45.95";
    }
};
 
let USPS = function() {
    this.calculate = function(package) {
        // calculando
        return "$39.40";
    }
};
 
let Fedex = function() {
    this.calculate = function(package) {
        // calculando
        return "$43.20";
    }
};
 
//Resgistro para el ALERT
 
let log = (function() {
    let log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    let package = { from: "76712", to: "10012", weigth: "lkg" };
 
    // 3 disponibles
    let ups = new UPS();
    let usps = new USPS();
    let fedex = new Fedex();
 
    let shipping = new Shipping();
 
    shipping.setStrategy(ups);
    log.add(`Estregia UPS:   ${shipping.calculate(package)}`);
    shipping.setStrategy(usps);
    log.add(`Estregia USPS:  ${shipping.calculate(package)}`);
    shipping.setStrategy(fedex);
    log.add(`Estregia FEDEX: ${shipping.calculate(package)}`);
 
    log.show();
}

run();

