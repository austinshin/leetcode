/**
 * @param {character[][]} grid
 * @return {number}
 */

const helper = (i, j, grid) => {
  if (!(j + 1 >= grid[i].length)) {
    if (grid[i][j+1] === "1") {
      grid[i][j+1] = "0";
      helper(i, j+1, grid);
    }
  }

  if (!(j - 1 < 0)) {
    if (grid[i][j-1] === "1") {
      grid[i][j-1] = "0";
      helper(i, j-1, grid);
    }
  }

  if (!(i - 1 < 0)) {
    if (grid[i-1][j] === "1") {
      grid[i-1][j] = "0";
      helper(i-1, j, grid);
    }
  }

  if (!(i + 1 >= grid.length)) {
    if (grid[i+1][j] === "1") {
      grid[i+1][j] = "0";
      helper(i+1, j, grid);
    }
  }
}

var numIslands = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let startingPoint = grid[i][j];
      if (startingPoint === "1") {
        grid[i][j] = "0";
        count += 1;
        helper(i, j, grid);
      }
    }
  }
  return count;
};

//numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
//numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]);

