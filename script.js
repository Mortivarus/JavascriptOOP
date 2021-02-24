class Circle {
    constructor(radius, color, name){
        this.radius = radius;
        this.color = color;
        this.name = name;   
    }
    get radius(){
        return this.radius
    }
    get area(){
        return Math.PI*Math.pow(this.radius, 2)
    }

    get name(){
        return this.name
    }
}

const circle1 = new Circle(1.5, 'blue', 'circle1')

const circle2 = new Circle(10, 'red', 'circle2')

const circle3 = new Circle(20, 'yellow', 'circle3')

console.log(`${circle1.area}`)