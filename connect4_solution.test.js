describe("Connect Four Game", () => {
    beforeEach(() => {
      // Clear the board before each test
      board = [];
      makeBoard();
    });
  
    describe("makeBoard", () => {
      it("should create an empty board", () => {
        expect(board.length).toBe(HEIGHT);
        board.forEach(row => {
          expect(row.length).toBe(WIDTH);
          row.forEach(cell => {
            expect(cell).toBeUndefined();
          });
        });
      });
    });
  
    describe("findSpotForCol", () => {
      it("should return null if the column is full", () => {
        for(let i=0; i<HEIGHT; i++) {
          board[i][0] = 1;
        }
        expect(findSpotForCol(0)).toBeNull();
      });
  
      it("should find the first open spot in the column", () => {
        board[HEIGHT-1][0] = 1;
        expect(findSpotForCol(0)).toBe(HEIGHT-2);
      });
    });
  
    describe("checkForWin", () => {
      it("should return false for an empty board", () => {
        expect(checkForWin()).toBe(false);
      });
  
      it("should detect a horizontal win", () => {
        // Set up a horizontal win
        board[0] = [1, 1, 1, 1, undefined, undefined, undefined];
        currPlayer = 1;
        expect(checkForWin()).toBe(true);
      });
  
      it("should detect a vertical win", () => {
        // Set up a vertical win
        for(let i=0; i<4; i++) {
          board[i][0] = 1;
        }
        currPlayer = 1;
        expect(checkForWin()).toBe(true);
      });
    });
  });
  