// undirected Path Problem 
const undirectedPath = (edges, nodeA, nodeB)=>{
    
    // convert edge list into adjcency list, using traversal
    const graph = buildGraph(edges);

    // traversal - DFS recursively
    return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) =>{
    // found path if source = destination
    if (src === dst) return true;
    
    // stop inifite loop, avoid inifite recursion 
    if (visited.has(src)) return false; 
    
    visited.add(src);
    
   for (let neighbor of graph[src]){
       if (hasPath(graph, neighbor, dst, visited) === true) {
           return true;
       }
   } 
   return false;
}
// build helper function
const buildGraph = (edges)=>{
    
    // JS object
    const graph = {};
    
    // iterate through edges, fill up with info from edges
    for(let edge of edges){
        //deconstruct out of edge
        const [a,b] = edge;
        // ititializing a, b in graph if not in graph
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        
        // add neighbors into edges
        graph[a].push(b);
        graph[b].push(a);
    }
    // return js object
    return graph;
};

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
    ];
    