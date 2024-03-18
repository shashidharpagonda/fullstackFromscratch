const arr = [1,2,3,4,5];
const sqArr = [];

for(let i=0; i < arr.length ; i++){
    sqArr.push(arr[i] * arr[i]);
}
console.log(sqArr);
//Smart way to do above

const squaredValues = arr.map(function(num)
                              {
                                return num * num;
                             })

console.log(squaredValues);                        
