

const connectedComponentCount = (graph)=>{
    const visited = new Set();
    let count = 0;
    

    // iterative code (hope to different compononets) 
    // traversal code (explore single component as fare as possible)
    
    // start with iterative code, being traversal @ every potential nodes in graph
    for (let node in graph){
        if (explore(graph, node, visited) === true){
            count +=1;
        }
    }        
    console.log(count);
    return count;
};

const explore = (graph, current, visited)=>{
    if (visited.has(String(current))) return false;
    
    visited.add(String(current));
    
    for (let neighbor of graph[current]){
        explore(graph, neighbor, visited);
    }
    
    return true;
};
// javaScript objects (key, values) pair
connectedComponentCount ({
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
});