//parent class Shapes that standarizes the properties of the shapes. So every class is taking in the logo, textColor, and shapeColor
class Shapes {
    constructor(logo, textColor, shapeColor) {
        this.logo = logo;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

//child classes that inherit from the parent class Shapes. Each child class has a render method that returns the SVG string for the shape. 
//Only difference in the render function is the second line that is specific to the shape.
class Triangle extends Shapes {
    constructor(logo, textColor, shapeColor) {
        super(logo, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 300,200 0,200" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logo}</text>
                </svg>`;
    }
}

class Square extends Shapes {
    constructor(logo, textColor, shapeColor) {
        super(logo, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logo}</text>
                </svg>`;
    }
}

class Circle extends Shapes {
    constructor(logo, textColor, shapeColor) {
        super(logo, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logo}</text>
                </svg>`;
    }
}

//exports the classes so they can be used in other files.
module.exports = {Triangle, Square, Circle};
