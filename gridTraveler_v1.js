
// Grid Traveler, how many moves does it take to from start to end
function grid_Traveler(n, m, memo = {}){

    // are the args in memo?7 
    // need key with n and m
    const key = n + ', ' + m;

    // new base case 
    if (key in memo) return memo[key];

    // base case 
    if (n === 0 || m ===0) return 0;
    if (n === 1 && m === 1) return 1;

    // recursive function call 
    memo[key] = grid_Traveler(n - 1, m, memo) + grid_Traveler(n, m - 1, memo);

    // output Traveler 
    return memo[key];
};

console.log(grid_Traveler(3,3)); // prints: 6
console.log(grid_Traveler(18,18)); // prints: 2333606220