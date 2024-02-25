let Triangle = require('../lib/shapes').Triangle;
let Square = require('../lib/shapes').Square;
let Circle = require('../lib/shapes').Circle;



//tests for each shape class. Each shape object is created with some parameters and then it checks that it contains the correct svg string.
    describe('Triangle', () => {
        it(`it should make an orange triangle`, () => {

            let logo = 'tst';
            let textColor = 'blue';
            let shapeColor = 'orange';

            const shape = new Triangle(logo, textColor, shapeColor);
            //expect.stringContaining checks for the specific string within the test object that is rendered.
            expect(shape.render()).toEqual(expect.stringContaining(`<polygon points="150,0 300,200 0,200" fill="orange" />`));
        });
        it(`it should make a triangle with blue text that says tst`, () => {

            let logo = 'tst';
            let textColor = 'blue';
            let shapeColor = 'red';

            const shapeTwo = new Triangle(logo, textColor, shapeColor);

            expect(shapeTwo.render()).toEqual(expect.stringContaining(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">tst</text>`));
        });
    });

    describe('Square', () => {
        it(`it should make a green square`, () => {

            let logo = 'tst';
            let textColor = 'blue';
            let shapeColor = 'green';

            const shapeThree = new Square(logo, textColor, shapeColor);

            expect(shapeThree.render()).toEqual(expect.stringContaining(`<rect x="0" y="0" width="300" height="200" fill="green" />`));
        });
        it(`it should make a square with blue text that says tst`, () => {

            let logo = 'tst';
            let textColor = 'blue';
            let shapeColor = 'red';

            const shapeFour = new Square(logo, textColor, shapeColor);

            expect(shapeFour.render()).toEqual(expect.stringContaining(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">tst</text>`));
        });
    });

    describe('Circle', () => {
        it(`it should make a yellow circle`, () => {

            let logo = 'tst';
            let textColor = 'blue';
            let shapeColor = 'yellow';

            const shapeFive = new Circle(logo, textColor, shapeColor);

            expect(shapeFive.render()).toEqual(expect.stringContaining(`<circle cx="150" cy="100" r="100" fill="yellow" />`));
        });
        it(`it should make a circle with blue text that says tst`, () => {

            let logo = 'tst';
            let textColor = 'blue';
            let shapeColor = 'red';

            const shapeSix = new Circle(logo, textColor, shapeColor);

            expect(shapeSix.render()).toEqual(expect.stringContaining(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">tst</text>`));
        });
    }); 
