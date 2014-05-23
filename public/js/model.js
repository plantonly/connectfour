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
  },
  fourInCol: function(){
    var count = 0
    var previous = 0
    for (var index = 0; index < 6; index++){
      if (previous === 0){
        previous = this.rows[index].player
      }
      if (this.rows[index].player == previous && previous != 0){
        previous = this.rows[index].player
        count++
      }
      else {
        count = 0
        previous = this.rows[index].player
      }
      if (count == 4){
        return true
      }
    }
  }
}

ConnectFour = function() {
  this.BOARD_WIDTH = 7
  this.board = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
}

ConnectFour.prototype = {
  makeMove: function(player, column) {
    return this.board[column].makeMove(player)
  },
  checkCol: function(col){
    return this.board[col].fourInCol()
  },
  checkRow: function(col,row){
    var count = 0
    var previous = 0
    var key = this.getValue(col,row)
    for (var column = 0; column < 7; column++){
      if (this.board[column].rows[row].player == key){
        count++
      }
      else {
        count = 0
      }
      if (count == 4){
        return true
      }
    }
  },
  getValue: function(col,row){
    return this.board[col].rows[row].player
  },
  checkDiag: function(col, row){
    var d1 = [this.getValue(0,0),this.getValue(1,1),this.getValue(2,2),this.getValue(3,3),this.getValue(4,4),this.getValue(5,5)]
    var d2 = [this.getValue(1,0),this.getValue(2,1),this.getValue(3,2),this.getValue(4,3),this.getValue(5,4),this.getValue(6,5)]
    var d3 = [this.getValue(2,0),this.getValue(3,1),this.getValue(4,2),this.getValue(5,3),this.getValue(6,4)]
    var d4 = [this.getValue(3,0),this.getValue(4,1),this.getValue(5,2),this.getValue(6,3)]
    var d5 = [this.getValue(0,1),this.getValue(1,2),this.getValue(2,3),this.getValue(3,4),this.getValue(4,5)]
    var d6 = [this.getValue(0,2),this.getValue(1,3),this.getValue(2,4),this.getValue(3,5)]
    var d7 = [this.getValue(0,3),this.getValue(1,2),this.getValue(2,1),this.getValue(3,0)]
    var d8 = [this.getValue(0,4),this.getValue(1,3),this.getValue(2,2),this.getValue(3,1),this.getValue(4,0)]
    var d9 = [this.getValue(0,5),this.getValue(1,4),this.getValue(2,3),this.getValue(3,2),this.getValue(4,1),this.getValue(5,0)]
    var d10 = [this.getValue(1,5),this.getValue(2,4),this.getValue(3,3),this.getValue(4,2),this.getValue(5,1),this.getValue(6,0)]
    var d11 = [this.getValue(2,5),this.getValue(3,4),this.getValue(4,3),this.getValue(5,2),this.getValue(6,1)]
    var d12 = [this.getValue(3,5),this.getValue(4,4),this.getValue(5,3),this.getValue(6,2)]
    var all = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12]
    var key = this.board[col].rows[row].player
    for (var diag = 0; diag< 12; diag++){
      loopAmount = all[diag].length
      var previous = 0
      var count = 0
      for (var index = 0; index < loopAmount; index++ ){
        if (all[diag][index] == key){
          count++
        }
        else {
          count = 0
        }
        if (count == 4){
          return true
        }
      }
    }
  },
  checkWin: function(col, row){
    if ( this.checkCol(col) || this.checkRow(col, row) || this.checkDiag(col,row) ) {
      return true
    }
  }
}






