function convertToAdjList(adjMatrix) {
    //create empty adjacency list 
    let adjList = []; 

    //loop through each entry of the matrix
    //the number of rows is equal to the number of columns
    for (let i = 0; i < adjMatrix.length; i++) {
        let edges = []; 
        for (let j = 0; j < adjMatrix.length; j++) {
            //if the entry isn't zero, add it to list of edges
            if (adjMatrix[i][j] != 0) {
                edges.push(j); 
            }
        }
        //add the list of edges to the adjacency list 
        adjList.push(edges); 
    }

    return adjList;
}

