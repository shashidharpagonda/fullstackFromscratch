/*
    Write a function that takes in a string and returns the count of vowels in that string.
    Consider the vowels to be a, e, i, o, u (both uppercase and lowercase).
*/ 

/*
function noOfVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';

    for(let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            count += 1;
        }
    }
    return count;
}
console.log(noOfVowels("hello"));
*/ 

/*
2. Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or 
other sequences of characters which reads the same backward as forward 
(ignoring spaces, punctuation, and capitalization).

Input:  "Madam"     |   Output: true
*/ 

/*
function isPalindrome(str) {
    str = str.replace(/[&\/\\#, +()$~%.'":*?!<>{}]/g,'');
    str = str.toLowerCase();

    let revStr ="";
    let result = false;
    console.log("str: " + str);

    for(let i = str.length-1 ; i >=0; i--) 
        {
            revStr +=  str.charAt(i) ;
        }
    console.log("revStr: " + revStr);

        if( str === revStr ) result = true;
    
    return result;
}
*/

//console.log(isPalindrome("A man, a plan, a canal, Panama!"));
// let str ="A man, a plan, a canal, Panama!";
// console.log(str.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, ''));

/*
Write a function that takes in a string and returns the longest word in that string.
If there are multiple words with the same length, return the first one you encounter.

Example:
Input:  "JavaScript is a fun programming language"
Output: "programming"
*/

/*
function maxString(str)
{
    let maxStr = '';
    const arr = str.split(' ');

    for(let i = 0; i < arr.length; i++)
    {
       // let str = arr.at(i);
       // console.log("str:",str);
        if(arr.at(i).length > maxStr.length)
        {
            maxStr = arr[i];
        }
    }
    return maxStr;   
}

console.log(maxString('JavaScript is a fun programming language'));
*/

/*
    function add(x)
    {
       return function(y){

        return function(z){

          return x + y + z;
        }
       }
    }

    var result = add(2)(3,4);

    console.log(result);
*/

function multiplyBy(num){
    return function(x){
        return num * x;
    }
}

var multiplyByTwo = multiplyBy(2);
var result = multiplyByTwo(5);

console.log(result);