//Make a parent class Shape
class Shape{
    constructor(color, name){
        this._color = color;
        this._name = name;
    }
    get name(){
        return this._name
    }

    set name(x){
        this._name = x
    }

    get color(){
        return this._color
    }

    set color(x){
        this._color = x   
    }
}

//Make a circle class
class Circle extends Shape{
    constructor(radius, color, name){
        super(color, name);
        this.radius = radius;
    }
    radius(){
        return this.radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

//Make three circles
const circleBlue = new Circle(1.5, 'blue', 'blauwe cirkel')

const circleRed = new Circle(10, 'red', 'rode cirkel')

const circleYellow = new Circle(20, 'yellow', 'gele cirkel')

//Print the circles on the screen
document.getElementById("circleBlue").innerHTML = ` De ${circleBlue.name} heeft een oppervlak van ${circleBlue.area().toFixed(2)}`

document.getElementById("circleRed").innerHTML = ` De ${circleRed.name} heeft een oppervlak van ${circleRed.area().toFixed(2)}`

document.getElementById("circleYellow").innerHTML = ` De ${circleYellow.name} heeft een oppervlak van ${circleYellow.area().toFixed(2)}`

//Make a square class
class Square extends Shape{
    constructor(size, color, name){
        super(color, name);
        this.size = size;
    }
    size(){
        return this.size
    }

    area(){
        return Math.pow(this.size, 2)
    }
}

//Make three squares
const squareBlack = new Square(2, 'black', "zwarte vierkant")

const squareGreen = new Square(5, 'green', "groene vierkant")

const squareOrange = new Square(100, 'orange', "oranje vierkant")

//Print the squares on the screen
document.getElementById("squareBlack").innerHTML = `De ${squareBlack.name} heeft een oppervlak van ${squareBlack.area()}`

document.getElementById("squareGreen").innerHTML = `De ${squareGreen.name} heeft een oppervlak van ${squareGreen.area()}`

document.getElementById("squareOrange").innerHTML = `De ${squareOrange.name} heeft een oppervlak van ${squareOrange.area()}`

//Make a rectangle class
class Rectangle extends Shape{
    constructor(width, height, color, name){
        super(color, name);
        this.width = width;
        this.height = height;
    }
    width(){
        return this.width
    }

    height(){
        return this.height
    }

    area(){
        return this.width * this.height
    }
}

//Make three rectangles
const rectangleBlack = new Rectangle(2, 5, 'black', 'zwarte rechthoek')

const rectangleGreen = new Rectangle(5, 10, 'green', 'groene rechthoek')

const rectangleOrange = new Rectangle(100, 100, 'orange', 'oranje rechthoek')

//Print the squares on the screen
document.getElementById("rectangleBlack").innerHTML = `De ${rectangleBlack.name} heeft een oppervlak van ${rectangleBlack.area()}`

document.getElementById("rectangleGreen").innerHTML = `De ${rectangleGreen.name} heeft een oppervlak van ${rectangleGreen.area()}`

document.getElementById("rectangleOrange").innerHTML = `De ${rectangleOrange.name} heeft een oppervlak van ${rectangleOrange.area()}`