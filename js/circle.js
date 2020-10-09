(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var calculatedArea = Math.PI * Math.pow(this.radius, 2);
            this.area = calculatedArea;
            return calculatedArea; // TODO: return the proper value

            // var area = Math.PI * Math.pow(circle.radius, 2);
            // console.log("The original area is: " + area);
            // return area;

        },

        logInfo: function (doRounding) {

            var circleArea = this.getArea();
            // TODO: complete this method.


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding){
                circleArea = Math.round(circleArea);
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
