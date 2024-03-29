const hasPath = (graph, src, dst) =>{
    const queue = [src];
    
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        
        if (current === dst) return true;
        
        for (let neighbor of graph[current]){
            queue.push(neighbor);

        }
        
    }
    return false;
}
const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

hasPath(graph, 'f', 'k');