class Partrulater extends GeometricShape {
    constructor(x, y, width, height) {
        super("patrulater");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    area() {
        //return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}