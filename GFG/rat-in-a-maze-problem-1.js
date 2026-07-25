// Problem Link: https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

class Solution {
    ratInMaze(maze) {
        const gridSize = maze.length;
        const validPaths = [];

        // Base case: If start or destination cell is blocked, no path exists
        if (maze[0][0] === 0 || maze[gridSize - 1][gridSize - 1] === 0) {
            return validPaths;
        }

        // Movements arranged alphabetically (D -> L -> R -> U) 
        // to guarantee output paths are in lexicographical order
        const moves = [
            { direction: 'D', rowOffset: 1,  colOffset: 0  },
            { direction: 'L', rowOffset: 0,  colOffset: -1 },
            { direction: 'R', rowOffset: 0,  colOffset: 1  },
            { direction: 'U', rowOffset: -1, colOffset: 0  }
        ];

        function explorePaths(currentRow, currentCol, currentPath) {
            // Target reached: append completed path to results
            if (currentRow === gridSize - 1 && currentCol === gridSize - 1) {
                validPaths.push(currentPath);
                return;
            }

            // Mark current cell as visited for the active path
            maze[currentRow][currentCol] = 0;

            for (const { direction, rowOffset, colOffset } of moves) {
                const nextRow = currentRow + rowOffset;
                const nextCol = currentCol + colOffset;

                // Check grid boundaries and ensure the cell is open (1)
                const isWithinBounds = nextRow >= 0 && nextRow < gridSize && nextCol >= 0 && nextCol < gridSize;
                
                if (isWithinBounds && maze[nextRow][nextCol] === 1) {
                    explorePaths(nextRow, nextCol, currentPath + direction);
                }
            }

            // Backtrack: Restore cell state so other paths can traverse it
            maze[currentRow][currentCol] = 1;
        }

        explorePaths(0, 0, "");
        return validPaths;
    }
}
