# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### My Answer 

My implementation of the program checks every entry of the adjacency matrix to 
find an edge for a vertex, before adding them to the adjacency list. This is 
done by checking every vertex for every vertex in a nested loop. So $|V| * (|V| + C)$
where  C is the constant amount of work done within the loops, when an edge is found. 
This simplifies to  $|V|^2 + C|V|$, meaning my program is dependent on the number of 
vertices as the program does the same amount of work no matter how many edges there
are in the graph. It still has to loop through every entry in the matrix to check
for the presence of edges. Therefore the runtime complexity would be $\Theta(|V|^2)$. 

## Sources and Plagiarism 

Used the following links to get a better understanding of the structures for adjacency matrices and lists: 

https://www.geeksforgeeks.org/adjacency-matrix-of-directed-graph/

https://www.geeksforgeeks.org/adjacency-list-meaning-definition-in-dsa/#3-adjacency-list-for-directed-and-weighted-graph

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
