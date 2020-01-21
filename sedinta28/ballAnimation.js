class BallAnimation {
    constructor(options) {
        this.startX = options.startX;
        this.startY = options.startY;
        this.endX = options.endX;
        this.endY = options.endY;
        this.step = options.step;
        this.size = options.size;
        this.element = null;
        this.anim = null;
        this.currentX = this.startX;
        this.currentY = this.startY;

        this.createElement();
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.position = "absolute";
        this.element.style.background = "green";
        this.element.style.borderRadius = "50%";
        this.element.style.left = `${this.startX}px`;
        this.element.style.top = `${this.startY}px`;
        this.element.style.display = "inline-block";
        this.animating = false;

        if (this.startX < this.endX) {
            this.directionX = 1;
        } else {
            this.directionX = -1;
        }

        if (this.startY < this.endY) {
            this.directionY = 1;
        } else {
            this.directionY = -1;
        }

        document.body.appendChild(this.element);
    }

    reset() {
        this.element.style.background = "green";
        this.currentX = this.startX;
        this.currentY = this.startY;

        this.element.style.left = `${this.startX}px`;
        this.element.style.top = `${this.startY}px`;

        this.stopAnimation();
    }

    startAnimation() {
        if (this.animating == false) {
            this.element.style.background = "red";
            this.animating = true;
            this.anim = requestAnimationFrame(this.animate.bind(this));
        }
    }

    stopAnimation() {
        this.animating = false;
        cancelAnimationFrame(this.anim);
    }

    animate() {
        console.log(this);
        this.currentX += this.step * this.directionX;
        this.currentY += this.step * this.directionY;

        if (this.directionX == 1) {
            if (this.currentX > this.endX) {
                this.currentX = this.endX;
            }
        } else {
            if (this.currentX < this.endX) {
                this.currentX = this.endX;
            }
        }

        if (this.directionY == 1) {
            if (this.currentY > this.endY) {
                this.currentY = this.endY;
            }
        } else if (this.directionY == -1) {
            if (this.currentY < this.endY) {
                this.currentY = this.endY;
            }
        }

        this.element.style.left = `${this.currentX}px`;
        this.element.style.top = `${this.currentY}px`;

        if (this.currentX == this.endX && this.currentY == this.endY) {
            this.stopAnimation();
        } else {
            this.anim = requestAnimationFrame(this.animate.bind(this));
        }


    }
}