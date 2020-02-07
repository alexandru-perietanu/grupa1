class Sprite {
    constructor(options){
        this._x = options.x;
        this._y = options.y;
        this._width = options.width;
        this._height = options.height;
        this._class = options.class;
        this._element = document.createElement("div");
        this.initialize();
    }

    initialize(){
        this.element.style.position = "absolute";
        this.element.style.left = `${this._x}px`;
        this.element.style.top = `${this._y}px`;
        this.element.style.width = `${this._width}px`;
        this.element.style.height = `${this._height}px`;
        this.element.className = this._class;
    }
    get element(){
        return this._element;
    }
    // getElement(){--- daca era fara _ la element-- confunda proprietatea cu numele functiei
    //     return this._element;
    // }

    get x(){
        return this._x;
    }

    set x(value){
        this._x = value;
        this.element.style.left = `${this._x}px`; 
    }

    get y(){
        return this._y;
    }

    set y(value){
        this._y = value;
        this.element.style.top = `${this._y}px`; 
    }

    get class(){
        return this._class;
    }

    set class(value){
        this._class = value;
        this.element.className = this._class;
    }

}