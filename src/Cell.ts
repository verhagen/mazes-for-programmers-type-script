class Cell {
  let neighbors :Map<Direction, Cell>;
  let links :Map<Cell, Boolean>;
  constructor(
      public row: int,
      public column: int,
      ) {
    neighbors = new Map<>();
    links = new Map<>();
  }
}
