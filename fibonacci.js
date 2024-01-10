// Empress Djata 
// Fibonacci recusive function with memoiation to improve time complexity
function Fibonacci(num, memo = {}) {

    // new base case 
    if (num in memo)
        return memo[num];

    // base case 
    if (num <= 2)
        return 1;

    // recursive function call
    memo[num] = Fibonacci(num - 1, memo) + Fibonacci(num - 2, memo);

    return memo[num];
}

console.log(Fibonacci(7));
console.log(Fibonacci(70));
