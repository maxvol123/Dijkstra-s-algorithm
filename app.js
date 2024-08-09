const graph = [
    [0, 10, 100, 100, 9],
    [10, 100, 4, 100, 100],
    [100, 4, 100, 6, 15],
    [100, 100, 6, 100, 7],
    [9, 100, 15, 7, 100]
];

let shortestWay = [0, 10, 100, 100, 9];
let filtredArr = [...shortestWay];

for (let i = 0; i < 5; i++) {
    let current = filtredArr.indexOf(Math.min(...filtredArr.filter(val => val !== 0)));
    for (let index = 0; index < shortestWay.length; index++) {
        if (graph[current][index] + shortestWay[current] < shortestWay[index]) {
            shortestWay[index] = graph[current][index] + shortestWay[current];
        }
    }
    filtredArr[current] = Infinity;
}

console.log("Shortest Way:", shortestWay);
