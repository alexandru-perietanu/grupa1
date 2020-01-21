class Cat {
    constructor(catProperties) {
        this.breed = catProperties.breed;
        this.name = catProperties.name;
        this.color = catProperties.color;
        this.age = catProperties.age;
        this.hasFur = catProperties.hasFur;
        this.owner = catProperties.owner;
        if (catProperties.tricks instanceof Array == false) {
            throw "cat tricks must be an array";
        }
        this.tricks = catProperties.tricks;
    }

    doTrick() {
        if (this.tricks.length == 0) {
            console.log(this.name, " knows no tricks");
            return;
        }
        console.log(this.name, " has done trick ", this.tricks[Math.floor(Math.random() * this.tricks.length)]);
    }

    bite() {
        console.log("BITE!!!!!");
    }

    eat() {
        console.log(this.name, " has eaten");
    }


    sleep() {
        console.log(this.name, " slept");
    }
}