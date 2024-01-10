// Goal: Print out all values of graph according to DFS traversal
// recursively
// define function depthFirstPrint with 
// parameters(adjList, startNode)
const depthFirstPrint = (graph, source)=>{
    console.log(source);
    
    // look at neighbors graph[source]
    for(let neighbor of graph[source]){
        depthFirstPrint(graph, neighbor);
    }
    
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//call function with parameters
depthFirstPrint(graph, 'a');