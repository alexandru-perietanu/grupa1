class ClickableSprite extends Sprite {
    constructor(options) {
        super(options);
        this.clickCallback = options.clickCallback;
        this.init();
    }

    init() {
        console.log("init din animated sparitel")
        this._element.addEventListener("click", this.click.bind(this));
    }

    click(e) {
        console.log("click");
        this.clickCallback(e);
    }
}