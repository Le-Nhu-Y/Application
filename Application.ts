class Application{
    private name:string;
    static count:number = 0;
    constructor(name:string){
        this.name = name;
        Application.count++;
    }
}
console.log(Application.count);
let app1 = new Application("Lop 1");
console.log(Application.count);
let app2 = new Application("Lop 2");
console.log(Application.count);
let app3 = new Application("Lop 3");
console.log(Application.count);
let app4 = new Application("Lop 4");
console.log(Application.count);