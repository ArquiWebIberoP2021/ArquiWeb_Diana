     //State
    //Estado


let TrafficLight = function () {
    let count = 0;
    let currentState = new Red(this);
 
    this.change = function (state) {
        // Cambios (limite)
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };
 
    this.start = function () {
        currentState.go();
    };
}
 
let Red = function (light) {
    this.light = light;
 
    this.go = function () {
        log.add("ROJO          -> UN MINUTO");
        light.change(new Green(light));
    }
};
 
let Yellow = function (light) {
    this.light = light;
 
    this.go = function () {
        log.add("AMARILLO  -> 10 Segundos");
        light.change(new Red(light));
    }
};
 
let Green = function (light) {
    this.light = light;
 
    this.go = function () {
        log.add("VERDE       -> Un minuto");
        light.change(new Yellow(light));
    }
};
 

//Registro 
let log = (function () {
    let log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    let light = new TrafficLight();
    light.start();
 
    log.show();
}

run();
