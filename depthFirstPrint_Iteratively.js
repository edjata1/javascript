// Goal: Print out all values of graph according to DFS traversal
// iteratively
// define function depthFirstPrint with 
// parameters(adjList, startNode)
const depthFirstPrint = (graph, source)=>{
    
    // create excitic stack, using array with [ source as key]
    const stack = [source];
    
    // main loop: iterate through loop for keys from stack  
    while(stack.length > 0){
        
        // remove top of stack: return in currentStackItem var
        const currentStackItem = stack.pop();
        
        // print currentStackItem pop from stack
        console.log(currentStackItem);
        
        // get values of key & "consider key's neighbors"
        for (let neighbor of graph[currentStackItem]){
            
            // push to top of stack
            // iterate through keys for dfs neighbors values
            stack.push(neighbor);

        }
    }
    
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//call function with parameters
depthFirstPrint(graph, 'a');