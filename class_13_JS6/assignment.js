/*  Complete the function twoSeries(file1, file2, ansArray),
    which takes in two file names as file1 and file2 and ansArray

    Write the code such that:
    1. Both the files are serially read using the fetchByCb(fileName, callback)
    2. Add the content of both files in the ansArray.
    3. At the end of the contents, the ansArray should hold string "All files have been read"

Raw Problem 
    Complete the function twoSeries(file1, file2, ansArray), 
    which takes in two file names as file1 and file2 and ansArray

Write the code such that:
    1. Both the files are serially read using the fetchByCb(fileName, callback)
    2. Add the content of both files in the ansArray.
    3. At the end of the contents, the ansArray should hold string "All files have been read"

Input:  let ansArray = [];
        twoSeries('FILE 1', 'FILE 2', ansArray)';

Output: ansArray = ['content : FILE 1', 'content : FILE 2', 'All files have been read']
    */
function fetchByCb(fileName, cb) {
    setTimeout(function () {
        cb(`content : ${fileName}`);
    }, 100 * Math.random());
}

function twoSeries(file1, file2, ansArray) {
    //write your code here =========================================
    fetchByCb(file1, function (content) {
        ansArray.push(content);
    
    fetchByCb(file2, function (content) {
        ansArray.push(content);
        ansArray.push('All files have been read');
    });
    });
    //=========================================================
    // return ansArray;
}

let ansArray = [];
twoSeries('File 1','File 2',ansArray);

console.log(ansArray);



/*
Write a function timeoutPromise that takes a delay time in milliseconds and returns a Promise. 
The Promise should resolve after the specified delay.
You need to implement the timeoutPromise function, which returns a Promise. 
The Promise should resolve after the specified delay time.
*/

/*
function timeoutPromise(delay){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(`Promise resolved after ${delay}  milliseconds`);
        }, delay);
    });
}

timeoutPromise(2000).then(result => console.log(result));
timeoutPromise(3000).then(result => console.log(result));
*/
