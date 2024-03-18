

function printName(cb1, cb2, cb3) {
    console.log("cb", cb1, cb2, cb3);
    console.log("Lord");
    /*
        Calling received callback function
    */ 
    cb1(); //cb: callback function 
    cb2(); //cb: callback function 
    cb3();    
    
}

function printLastName() {
    console.log('Krishna');
}

function printAddress() {
    console.log('Bangalore');
}

function printAge(){
    console.log(27);
}

printName(printLastName, printAge, printAddress);
//printName('Govind',printAge,'Mathura');


/*
    Find the area of the circle for the given radius in the given array 
*/

const radiusArray = [2,3,4,5,8];

function findArea(radiusArr) {
    const result = [];
    for (let i = 0; i < radiusArr.length; i++) {
        result.push(Math.PI * radiusArr[i] * radiusArr[i]);
    }
    return result;
}

let area= findArea(radiusArray);
console.log(area);

/*
    Find the circumference of the circle for the given radius in the given array 
*/

function findCircumference(radiusArr) {
    const result = [];
    for (let i = 0; i < radiusArr.length; i++) {
        result.push(2 * Math.PI * radiusArr[i]);
    }
    return result;
}

/*
    Find the diameter of the circle
*/
function findDiameter(radiusArr){
    const result = [];
    for (let i = 0; i < radiusArr.length; i++) {
        result.push(2 * radiusArr[i]);
    }
    return result;
}

/*
  To avoid the repetition of the code, we can use callback functions as below
*/

function circleArea(radius)
{
    return Math.PI * radius * radius;
}

function circleCircumference(radius)
{
    return 2 * Math.PI * radius;
}

function circleDiameter(radius)
{
    return 2 * radius;
}

//Higher order functions or template function or wrapper function
function calculate(radiusArr, logic)
{
    const result = [];
    for(let i = 0 ; i < radiusArr.length ; i++)
    {
        result.push(logic(radiusArr[i]));
    }

    return result;
}

const finalArea= calculate(radiusArray, circleArea);
console.log(finalArea);

const finalCircumference= calculate(radiusArray, circleCircumference);
console.log("finalCircumference: " ,finalCircumference);

const finalDiameter = calculate(radiusArray, circleDiameter);
console.log("finalDiameter: ", finalDiameter);