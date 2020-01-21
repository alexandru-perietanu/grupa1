class Dreptunghi extends Partrulater {
    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.name = "dreptunghi";
    }

    area() {
        return this.width * this.height;
    }

    
}