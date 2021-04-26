//-> Command
//Mando

//Calculadora básica con 4 operaciones, + - x /, cada operacioón encapsulado con COMMAND
//Mantiene una pila de comandos, cada nuevo comando se ejecuta y se coloca en la pila
// Si se Llega a dehacer la solicitud, saca el último comando de la pila y ejecuta la acción inversa


function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

let Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

let AddCommand = function (value) {
    return new Command(add, sub, value);
};

let SubCommand = function (value) {
    return new Command(sub, add, value);
};

let MulCommand = function (value) {
    return new Command(mul, div, value);
};

let DivCommand = function (value) {
    return new Command(div, mul, value);
};

let Calculator = function () {
    let current = 0;
    let commands = [];
    function action(command) {
        let name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            commands.push(command);
            log.add(`${action(command)}: ${command.value}`);

        },

        undo: function () {
            let command = commands.pop();
            current = command.undo(current, command.value);
            log.add(`Deshacer ${action(command)}: ${command.value}`);

        },

        getCurrentValue: function () {
            return current;
        }
    }
}

// Registro para mostrar los resultados

let log = (function () {
    let log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run() {
    let calculator = new Calculator();

    // Solicitudes 
    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    // invertir los últimos dos comandos

    calculator.undo();
    calculator.undo();

    log.add("\nValor: " + calculator.getCurrentValue());
    log.show();
}

run();
