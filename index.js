const Triangle = require('./lib/shapes').Triangle;
const Square = require('./lib/shapes').Square;
const Circle = require('./lib/shapes').Circle;

const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require('fs');

inquirer.prompt([
    {
        type: `maxlength-input`,
        message: `Enter 3 characters for your logo`,
        name: `logo`,
        maxLength: 3
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

        fs.writeFile(`logo.svg`, triangle.render(), function (err) {
            err ? console.log(err) : console.log(`Generated logo.svg!`)
        })
        
    } else if (shape === `Square`) {
        let square = new Square(logo, textColor, shapeColor);
        square.render();

        fs.writeFile(`logo.svg`, square.render(), function (err) {
            err ? console.log(err) : console.log(`Generated logo.svg!`)
        })

    } else {
        let circle = new Circle(logo, textColor, shapeColor);

        fs.writeFile(`logo.svg`, circle.render(), function (err) {
            err ? console.log(err) : console.log(`Generated logo.svg!`)
        })
    }
});
