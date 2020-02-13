class Graph {
    constructor(options) {
        this.width = options.width;
        this.height = options.height;
        this.dataSeries = options.dataSeries;
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("width", this.width);
        this.canvas.setAttribute("height", this.height);
        this.ctx = this.canvas.getContext("2d");
        this.xPoints = [];
        this.yPoints = {};

        this.determineXPoints(this.dataSeries);
        this.determineYPoints(this.dataSeries);

    }

    determineXPoints(dataSeries) {
        var segmentLength = this.width / (dataSeries.length - 1);
        var x = 0;
        for (var i = 0; i < dataSeries.length; i++) {
            this.xPoints.push(x);
            x += segmentLength;
            // this.ctx.beginPath();
            // this.ctx.arc(this.xPoints[i], 75, 5, 0, 2 * Math.PI);
            // this.ctx.stroke();
        }
    }

    determineYPoints(dataSeries) {
        var yPoints = [];
        var min;
        var max;
        var point;
        var percent;
        var pixelValue;
        for (var i = 0; i < dataSeries.length; i++) {
            yPoints.push(dataSeries[i].y);
        }

        min = Math.min.apply(null, yPoints);
        max = Math.max.apply(null, yPoints);

        for (i = 0; i < yPoints.length; i++) {
            point = yPoints[i];
            percent = (point - min) * 100 / (max - min);
            pixelValue = this.height * percent / 100;
            this.yPoints[point] = this.height - pixelValue;
        }

        console.log("this.yPoints", this.yPoints)


        for (var i = 0; i < dataSeries.length; i++) {
            // this.xPoints.push(x);
            // x += segmentLength;
            this.ctx.beginPath();
            this.ctx.arc(this.xPoints[i], this.yPoints[dataSeries[i].y], 5, 0, 2 * Math.PI);
            this.ctx.stroke();
        }

        console.log(min, max, yPoints);

    }


}