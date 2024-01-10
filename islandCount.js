const islandCount = (grid)=>{
    const visited = new Set();
    let count = 0;
    
    for (let r = 0; r < grid.length; r+=1){
        for(let c = 0; c < grid[0].length; c+=1){
            if(explore(grid, r, c, visited) === true){
                count +=1;
            }
        }
    }
   return count; 
};

const explore = (grid, r, c, visited)=>{
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid.length;
    if (!rowInbounds || !colInbounds) return false;
    
    if (grid[r][c]==='w') return false;
    
    const pos = r + ', ' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, c - 1, r, visited);
    explore(grid, c + 1, r, visited);
    
    return true;
};

const grid = [    
    ['w','l','w','w','l','w'],
    ['l','l','w','w','l','w'],
    ['w','l','w','w','w','w'],
    ['w','w','w','l','l','w'],
    ['w','l','w','l','l','w'],
    ['w','w','w','w','w','w']
];
