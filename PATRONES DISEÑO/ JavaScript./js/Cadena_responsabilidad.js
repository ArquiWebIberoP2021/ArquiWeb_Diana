   // Chain of Responsability
    //Cadena de responsabilidad

// ATM -> DEPENDIENDO EL DINERO INGRESADO TE DEVUELVE LOS BILLETES

//CREANDO EL OBJETO CLIENTE -> LA SOLICITUD
let Request = function(amount) {
    this.amount = amount;
    log.add(`Monto Solicitado: $ ${amount} `);
}
 
Request.prototype = {
    get: function(bill) {
        let count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        log.add(`Repartir ${count} billetes de $${bill} `);
        return this;
    }
}

//Mostrar el alert
let log = (function() {
    let log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    let request = new Request(489);
    //Se encadenan las llamadas get, dependiendo la denominación
    request.get(100).get(50).get(20).get(10).get(5).get(1);
    log.show();
}

run();

