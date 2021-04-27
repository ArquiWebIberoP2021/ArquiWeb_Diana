     //Visitor
    //Visitante

//Elements
let Employee = function (name, salary, vacation) {
    let self = this;
        
    this.accept = function (visitor) {
        visitor.visit(self);
    };
 
    this.getName = function () {
        return name;
    };
 
    this.getSalary = function () {
        return salary;
    };
 
    this.setSalary = function (sal) {
        salary = sal;
    };
 
    this.getVacation = function () {
        return vacation;
    };
 
    this.setVacation = function (vac) {
        vacation = vac;
    };
};
 

//Visitante
let ExtraSalary = function () {
    this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};
 
let ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};
 
// Registro Alert
let log = (function() {
    let log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
        
        //ObjectStructure
    let employees = [
        new Employee("Justin", 10000, 10),
        new Employee("Harry", 20000, 21),
        new Employee("tanner", 250000, 51)
    ];
 
    let visitorSalary = new ExtraSalary();
    let visitorVacation = new ExtraVacation();
        
    for (let i = 0, len = employees.length; i < len; i++) {
        let emp = employees[i];
            
        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        log.add(`${emp.getName()}: $${emp.getSalary()} y ${emp.getVacation()} días de vacaciones`);
            
    }
 
    log.show();
}

run();
