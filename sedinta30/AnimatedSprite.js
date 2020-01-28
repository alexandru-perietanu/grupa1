class AnimatedSprite extends Sprite {
    constructor(options) {
        options.class = options.classes[0];
        super(options);
        this._classes = options.classes;
        this._index = 0;
        this.startAnimation();
    }

    startAnimation() {
        setInterval(this.nextFrame.bind(this), 100);
    }

    nextFrame() {
        this._index++;
        if (this._index >= this._classes.length) {
            this._index = 0;
        }

        this.class = this._classes[this._index];
    }
}