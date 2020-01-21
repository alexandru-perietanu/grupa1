class Circle extends GeometricShape {
    constructor(centerX, centerY, radius) {
        super("circle");
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}