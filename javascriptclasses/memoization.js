
/*
    - Memoizaton is an optimization technique to improve the performance and speed up the 
      execution of functions by caching their results.

    - It is particularly useful when dealing with frequently called functions.

    - JS provides various ways to implement memoization.

    - Memoization involves storing the results of expensive function calls in memory
      and returning the cache results when same inputs occur again. This improves 
      performance of the program.
      The basic idea behind memoization can be summarized in three steps:
        1. Check if the result for a given set of inputs is already cached.
        2. If the result is found, return it.
        3. Otherwise, compute the result, cache it, and return it.

        Fibonacci sequences

        function fibonacci(n)
        {
            if ( n < = 1) return n;

            return fibonacci(n - 1) + fibonacci(n-2);
        }

        This implementation has an exponential time complexity, 
        which means it performs redundant calculations for the same values, 
        leading to inefficient execution. By applying memoization, 
        we can drastically improve the performance of the fibonacci function.
        
        One way to solve this problem is by using cache object to cache the result.

        function fibonacci(n, cache = {})
        {
            if ( n < = 1) return n;

            if ( cache[n])
            {
                return cache[n];
            }

            const result = fibonacci(n-1, cache) + fibonacci(n-2, cache);
            cache[n] = result;

            return result;
        }


        Another approach using higher order functions


*/

function fibonacci(n)
{
    if ( n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n-2);
}


function memoize(func)
{
    const cache = {}; // empty object

    // ananomus function
    // ...args is an array of functions
    return function(...args) 
    {
        // To convert into string, we use JSON.stringify
        const key = JSON.stringify(args); 

        if(cache[key]){
            return cache[key];
        }

        const result = func.apply(this, args);
        cache[key] = result;

        return result;
    };
}

const fibonacciMemoized = memoize(fibonacci);
fibonacciMemoized(10);
