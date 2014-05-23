Cell = function() {
  //0 = blank, 1 = player1, 2 = player2
  this.player = 0
}

Column = function() {
  this.rows = [new Cell(0), new Cell(0), new Cell(0), new Cell(0), new Cell(0), new Cell(0)]
}

Column.prototype = {
  makeMove: function(player) {
    var index = this.rows.length - 1
    var cellFilled = false
    while(cellFilled == false && index >= 0){
      if(this.rows[index].player === 0){
        this.rows[index].player = player
        cellFilled = true
        return index
      }
      index--;
    }
    return -1
  }
}

ConnectFour = function() {
  this.BOARD_WIDTH = 7
  this.board = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
}

ConnectFour.prototype = {
  makeMove: function(player, column) {
    this.board[column].makeMove(player)
  }
}