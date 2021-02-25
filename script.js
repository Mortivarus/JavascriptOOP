//Make a circle class

class Circle {
    constructor(radius, color, name){
        this.radius = radius;
        this.color = color;
        this.name = name;
    }
    radius(){
        return this.radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    name(){
        return this.name
    }
}

//Make three circles
const circleBlue = new Circle(1.5, 'blue', 'Harambe')

const circleRed = new Circle(10, 'red', 'Charlie')

const circleYellow = new Circle(20, 'yellow', 'Richard')

//Print the circles on the screen
document.getElementById("circleBlue").innerHTML = ` De blauwe cirkel heeft een oppervlak van ${circleBlue.area().toFixed(2)}`

document.getElementById("circleRed").innerHTML = ` De rode cirkel heeft een oppervlak van ${circleRed.area().toFixed(2)}`

document.getElementById("circleYellow").innerHTML = ` De gele cirkel heeft een oppervlak van ${circleYellow.area().toFixed(2)}`

//Make a square class
class Square{
    constructor(size, color, name){
        this.size = size;
        this.color = color;
        this.name = name;
    }
    size(){
        return this.size
    }

    area(){
        return Math.pow(this.size, 2)
    }
    
    name(){
        return this.name
    }
}

//Make three squares
const squareBlack = new Square(2, 'black', "Caspar")

const squareGreen = new Square(5, 'green', "Balthasar")

const squareOrange = new Square(100, 'orange', "Melchior")

//Print the squares on the screen
document.getElementById("squareBlack").innerHTML = `De zwarte vierkant heeft een oppervlak van ${squareBlack.area()}`

document.getElementById("squareGreen").innerHTML = `De groene vierkant heeft een oppervlak van ${squareGreen.area()}`

document.getElementById("squareOrange").innerHTML = `De oranje vierkant heeft een oppervlak van ${squareOrange.area()}`

//Make a rectangle class
class Rectangle{
    constructor(width, height, color, name){
        this.width = width;
        this.height = height;
        this.color = color;
        this.name = name;
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

const rectangleBlack = new Rectangle(2, 5, 'black', 'Kwik')

const rectangleGreen = new Rectangle(5, 10, 'green', 'Kwek')

const rectangleOrange = new Rectangle(100, 100, 'orange', 'Kwak')

//Print the squares on the screen
document.getElementById("rectangleBlack").innerHTML = `De zwarte rechthoek heeft een oppervlak van ${rectangleBlack.area()}`

document.getElementById("rectangleGreen").innerHTML = `De groene rechthoek heeft een oppervlak van ${rectangleGreen.area()}`

document.getElementById("rectangleOrange").innerHTML = `De oranje rechthoek heeft een oppervlak van ${rectangleOrange.area()}`