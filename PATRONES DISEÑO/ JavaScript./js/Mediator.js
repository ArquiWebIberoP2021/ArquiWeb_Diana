    //Mediator
    //Mediador


    let Participant = function(name) {
        this.name = name;
        this.chatroom = null;
    };
     
    Participant.prototype = {
        send: function(message, to) {
            this.chatroom.send(message, this, to);
        },
        receive: function(message, from) {
            log.add(`${from.name} a ${this.name}: ${message}`);
            
        }
    };
     
    let Chatroom = function() {
        let participants = {};
     
        return {
     
            register: function(participant) {
                participants[participant.name] = participant;
                participant.chatroom = this;
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
        var Vane = new Participant("Vane");
        var Diana = new Participant("Diana");
        var Bernardo = new Participant("Bernardo");
        var Mauricio = new Participant("Mauricio");
     
        var chatroom = new Chatroom();
        chatroom.register(Vane);
        chatroom.register(Diana);
        chatroom.register(Bernardo);
        chatroom.register(Mauricio);
     
        Mauricio.send("¿Bernardo qué resultado te salio en la macro?");
        Mauricio.send("Bernardo Contesta");
        Vane.send("¡Ya contestaaa!", Bernardo);
        Diana.send("¿En que tema van?");
        Bernardo.send("Creo que esta maaal", Mauricio);
     
        log.show();
    }
    
    run();
    