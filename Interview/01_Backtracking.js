```
N x M matrix, which is filled with 1's and 0's, You need to start from (0,0) and reach (N-1, M-1). You can move in right, up, left, down directions. You can only move to cells with 1. You need to tell me can you reach from (0,0) to (N-1, M-1).
```

function canReachDestination(matrix) {
  const N  = matrix.length;
  const M = matrix[0],length;

  if(matrix[0][0] === 0 || matrix[N-1][M-1] === 0) {
    return false;
  }

  const queue = [[0, 0]];

  const directions = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
  ];

  while(queue.length > 0 {
    const [r, c ] = queue.shift();

    if(r === N - 1 && c === M - 1) {
      return true;
    }

    for(const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if(nr >= 0 && nr < N && nc >= 0 && nc < M && matrix[nr][nc] === 1) {
        matrix[nr][nc] = 0;
        queue.push([nr, nc]);
      }
    }
  }
  return false;
}

