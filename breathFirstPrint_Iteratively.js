// Goal: Print out all values of graph according to DFS traversal
// breathFirstPrint_Iteratively (ONLY)
// define function breathFirstPrint with 
// parameters(adjList, startNode)
const breathFirstPrint = (graph, source)=>{
    // ititalize with source node
    const queue = [source];
    
    while(queue.length > 0){
        // shift removes
        const current = queue.shift();
        console.log(current);
        
        // get neighbor's of current
        for(let neighbor of graph[current]){
            // push adds to queue
            queue.push(neighbor);
        }
    }
}

const graph = {
    a: ['c','b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//call function with parameters
breathFirstPrint(graph, 'a');