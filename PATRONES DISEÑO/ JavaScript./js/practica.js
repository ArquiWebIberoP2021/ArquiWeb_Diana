    //Mediator
    //Mediador


    let Participant = function(name) {
        this.name = name;
        this.repository_project = null;
    };
     
    Participant.prototype = {
        send: function(message, to) {
            this.repository_project.send(message, this, to);
        },
        receive: function(message, from) {
            log.add(`${from.name} a ${this.name}: ${message}`);
            
        }
    };
     
    let Repositorio = function() {
        let participants = {};
     
        return {
     
            register: function(participant) {
                participants[participant.name] = participant;
                participant.repository_project = this;
            },
     
            send: function(message, from, to) {
                if (to) {                      // Mensaje en especifico
                    to.receive(message, from);    
                } else {                       // Mensaje para todos
                    for (key in participants) {   
                        if (participants[key] !== from) {
                            participants[key].receive(message, from);
                        }
                    }
                }
            }
        };
    };
     
    //Para imprimir el Alert
    let log = (function() {
        let log = "";
     
        return {
            add: function(msg) { log += msg + "\n"; },
            show: function() { alert(log); log = ""; }
        }
    })();
     
    function run() {
        let Vane = new Participant("Vane");
        let Diana = new Participant("Diana");
        let Bernardo = new Participant("Bernardo");
        let Mauricio = new Participant("Mauricio");
     
        let repository_project = new Repositorio();
        repository_project.register(Vane);
        repository_project.register(Diana);
        repository_project.register(Bernardo);
        repository_project.register(Mauricio);
     
        Mauricio.send("Realizando Fork",Vane);
        Mauricio.send("Realizando Cambios",Vane);
        Mauricio.send("Enviando Cambios",Vane);
        Mauricio.send("Creando pull request",Vane);
        Vane.send("Denegado - No funciona", Mauricio);
        Mauricio.send("Realizando Cambios",Vane);
        Mauricio.send("Enviando Cambios",Vane);
        Mauricio.send("Creando pull request",Vane);
        Vane.send("Acepto - Funciona perfecto",Mauricio);
        Vane.send("Fusionando ramas");
        Vane.send("Commit - Proyecto Actualizado");
        Diana.send("Agregando rama");
        Bernardo.send("Realizando Fork");
     
        log.show();
    }
    
    run();
   