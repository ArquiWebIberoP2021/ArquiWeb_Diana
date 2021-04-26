
/* -> Chain of Responsability
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

-> Chain of Responsability */

/* -> Command
    //Comando

//Calculadora básica con 4 operaciones, + - x /, cada operacioón encapsulado con COMMAND
//Mantiene una pila de comandos, cada nuevo comando se ejecuta y se coloca en la pila
// Si se Llega a dehacer la solicitud, saca el último comando de la pila y ejecuta la acción inversa



 -> Command */

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

var Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

var AddCommand = function (value) {
    return new Command(add, sub, value);
};

var SubCommand = function (value) {
    return new Command(sub, add, value);
};

var MulCommand = function (value) {
    return new Command(mul, div, value);
};

var DivCommand = function (value) {
    return new Command(div, mul, value);
};

var Calculator = function () {
    var current = 0;
    var commands = [];

    function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            commands.push(command);
            log.add(action(command) + ": " + command.value);
        },

        undo: function () {
            var command = commands.pop();
            current = command.undo(current, command.value);
            log.add("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: function () {
            return current;
        }
    }
}

// log helper

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run() {
    var calculator = new Calculator();

    // issue commands

    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    // reverse last two commands

    calculator.undo();
    calculator.undo();

    log.add("\nValue: " + calculator.getCurrentValue());
    log.show();
}