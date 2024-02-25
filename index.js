const Triangle = require('./lib/shapes').Triangle;
const Square = require('./lib/shapes').Square;
const Circle = require('./lib/shapes').Circle;

const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: `input`,
        message: `Enter 3 characters for your logo`,
        name: `logo`
    },
    {
        type: `input`,
        message: `Enter the text color for your logo`,
        name: `textColor`
    },
    {
        type: `list`,
        message: `Choose a shape for your logo`,
        choices: [`Triangle`, `Square`, `Circle`],
        name: `shape`
    },
    {
        type: `input`,
        message: `Enter the shape's color for your logo`,
        name: `shapeColor`
    },
])
.then(function (answers) {
    let logo = answers.logo;
    let textColor = answers.textColor;
    let shape = answers.shape;
    let shapeColor = answers.shapeColor;

    if (shape === `Triangle`) {
        let triangle = new Triangle(logo, textColor, shapeColor);
        triangle.render();
    } else if (shape === `Square`) {
        let square = new Square(logo, textColor, shapeColor);
        square.render();
    } else {
        let circle = new Circle(logo, textColor, shapeColor);
        circle.render();
    }

    fs.writeFile(`./logos/logo.svg`, logo, function (err) {
        err ? console.log(err) : console.log(`Generated logo.svg!`)
    })
});
