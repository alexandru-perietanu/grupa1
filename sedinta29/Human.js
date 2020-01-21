class Human extends Beeing {
    constructor(hoptions) {
        hoptions.mamifer = true;
        super(hoptions);// <=>new Beeing(hoptions)
        
        this.casatorit = hoptions.casatorit;
    }
}

