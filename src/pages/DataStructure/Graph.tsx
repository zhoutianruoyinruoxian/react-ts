import React, { Component } from 'react';
import Graph from 'src/library/dataStructure/Graph';
export default class GraphPage extends Component {
  componentDidMount() {

    var graph = new Graph<string>();
    var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7}
    for (var i = 0; i < myVertices.length; i++) { //{8}
      graph.addVertex(myVertices[i]);
    }
    graph.addEdge('A', 'B'); //{9}
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');

    function printNode(value) { 
      console.log('Visited vertex: ' + value); 
    }
    console.log(graph.toString());
    graph.bfs(myVertices[0],printNode)
  }
  render() {
    return (
      null
    )
  }
}

