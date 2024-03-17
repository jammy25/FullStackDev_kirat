class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log(this.name + " makes a " + this.speaks + " noise");   // func inside class
    }
}

let dog = new Animal("sheru", 4, "bow wow");   // Obj
let cat = new Animal("billi", 4, "meow meow");

cat.speak();   // calls func on obj