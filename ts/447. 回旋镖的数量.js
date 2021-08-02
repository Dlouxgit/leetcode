/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  const map = new Map();
  //   let res = 0;
  let res = [];
  for (let i = 0; i < points.length; i++) {
    const basic = points[i];
    map.clear();
    for (let j = 0; j < points.length; j++) {
      console.log(points[i], points[j]);
      if (j === i) continue;
      const cur = points[j];
      const dis = (basic[0] - cur[0]) ** 2 + (basic[1] - cur[1]) ** 2;
      if (map.has(dis)) {
        res.push([...map.get(dis), points[j]]);
        // res++;
      } else {
        console.log("ma,", map);
        map.set(dis, [points[i], points[j]]);
      }
    }
  }
  return res;
};

console.log(
  "numberOfBoomerangs([[0,0],[1,0],[2,0]])",
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ])
); // 2  [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
