const Shape =  require('./shape');
export default class Circle extends Shape {
    constructor() {
        super();
    }
    calculateArea() {
        console.log("Area of circle with color: " + this.color);
        return 3.14 * 5 * 5;
    }
}
module.exports = Circle;