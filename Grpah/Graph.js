const { Stack } = require("../Stack/Stack.js");
const { Queue } = require("../Queue/Queue.js");
class Graph {
  constructor() {
    this.adjList = new Array();
  }

  get(v) {
    for (var i = 0; i < this.adjList.length; i++) {
      if (Object.keys(this.adjList[i])[0] === v) {
        return this.adjList[i][v];
      }
    }
  }

  addEdge(v, w) {
    // to add edge from v to w
    this.get(v).push(w);

    // as this is unidirected graph lets add edge from w to v
    this.get(w).push(v);
  }

  addVertex(v) {
    this.adjList.push({ [v]: new Array() });
  }

  dfs() {
    const st = new Stack();
    const visitedArr = [];
    st.push(Object.keys(this.adjList[0])[0]);
    visitedArr.push(Object.keys(this.adjList[0])[0]);

    while (!st.isEmpty()) {
      const adjArrOfTop = this.get(st.stackArr[st.top]);
      for (var i = 0; i < adjArrOfTop.length; i++) {
        if (!visitedArr.includes(adjArrOfTop[i])) {
          st.push(adjArrOfTop[i]);
          visitedArr.push(adjArrOfTop[i]);
          break;
        } else if (
          visitedArr.includes(adjArrOfTop[i]) &&
          i === adjArrOfTop.length - 1
        ) {
          st.pop();
        }
      }
    }

    console.log("DFS -> ", visitedArr);
  }

  bfs() {
    const q = new Queue();
    const visitedArr = [];

    const firstVer = Object.keys(this.adjList[0])[0];
    q.enQueue(firstVer);
    visitedArr.push(firstVer);

    while (!q.isEmpty()) {
      const adjVertices = this.get(q.deQueue());
      adjVertices.forEach((ver) => {
        if (!visitedArr.includes(ver)) {
          q.enQueue(ver);
          visitedArr.push(ver);
        }
      });
    }

    console.log("BFS -> ", visitedArr);
  }

  displayGraph() {
    this.adjList.forEach((k) => {
      let res = "";
      Object.keys(k).forEach((key) => {
        k[key].forEach((val) => {
          res = res + "  " + val;
        });

        console.log(key, " -> ", res);
      });
    });
  }
}

const g = new Graph();

var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.displayGraph();
console.log(g.dfs());
g.bfs();
