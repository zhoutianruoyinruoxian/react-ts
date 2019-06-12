
type Vertex = any;

class Graph<T = Vertex> {
  private vertices: T[] = []; // 顶点名
  private adjList: Map<T, T[]> = new Map(); // 邻接表

  addVertex(v: T) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v1: T, v2: T) { // 接收两个顶点作为参数添加一条边
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  toString() { // 输出图的邻接表
    let string = '', i = 0;
    const { vertices, adjList } = this;
    for (i = 0; i < vertices.length; i++) {
      string += vertices[i] + '->';
      const neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        string += neighbors[j] + '';
      }
      string += '\n';
    }
    return string;
  }

  private initializeColor() {
    type Color = 'white' | 'grey' | 'black';
    let color: Map<T, Color> = new Map(); // 邻接表
    for (let i = 0; i < this.vertices.length; i++) {
      color.set(this.vertices[i], 'white');
    }
    return color;
  }

  bfs(v: T, callback?: Function) { // 广度优先搜索
    let color = this.initializeColor();
    let queue: T[] = []; // 队列,这里直接用数组来写
    queue.push(v);
    while (queue.length !== 0) {
      let u = queue.shift();
      let neighbors = this.adjList.get(u);
      color.set(u, 'grey');
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color.get(w) === 'white') {
          color.set(w, 'grey');
          queue.push(w);
        }
      }
      color.set(u, 'black');
      callback && callback(u);
    }
  }

}

export default Graph;