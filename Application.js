var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application("Lop 1");
console.log(Application.count);
var app2 = new Application("Lop 2");
console.log(Application.count);
var app3 = new Application("Lop 3");
console.log(Application.count);
var app4 = new Application("Lop 4");
console.log(Application.count);
