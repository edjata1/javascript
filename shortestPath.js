const shortestPath = (edges, nodeA, nodeB) =>{
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    console.log(graph);
    const queue = [[nodeA, 0]];
    
    while(queue.length > 0){
        const [node, distance] = queue.shift();
        
        // if true just found path 
        if(node === nodeB) return distance;
        
        // if false push node's neighbors
        for(let neighbor of graph[node]){
            if (!visited.has(neighbor)){
                visited.add(neighbor);
            queue.push([neighbor, distance +1]);
            }
        }
    }
    return -1;
};

// build graph from edges
const buildGraph = (edges)=>{
    const graph = {};
    
    for(let edge of edges){
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    console.log(graph);
    return graph;
};

const edges = [    
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
];
