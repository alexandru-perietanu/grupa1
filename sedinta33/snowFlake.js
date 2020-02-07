class SnowFlake extends Sprite{
    constructor(options){
        super(options)
        this.element.style.boxShadow =`0px 0px ${2*this._width}px ${2*this._width}px rgba(255, 255, 255, 1)`;
        this.dx = Math.random();
        this.initX = this._x;
        this.step = Math.random()/10 +0.02;
    }

    animate(){
        this.y = this.y + this._width;
        if (this.y > window.innerHeight){
            this.x = Math.random()*window.innerWidth;
            this.initX = this._x;
            this.y = 0;
        }
        this.x = this.initX + Math.sin(this.dx)* this._width * 10;
        this.dx += this.step;
    }
}