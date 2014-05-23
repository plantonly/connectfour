$(document).ready(function() {
  var view = new View();
  var board = new Board();
  var player1 = new Player("Player 1", "red");
  var player2 = new Player("Player 2", "black");
  var turn = false;
  var controller = new Controller(view, board, player1, player2);
  controller.bindListeners();
})

Controller.prototype = {

  bindListeners: function() {

    column1 = this.view.ColumnClick();
    column1.on("click", this.pieceDown.bind(this), false);
    column2 = this.view.ColumnClick();
    column2.on("click", this.pieceDown.bind(this), false);
    column3 = this.view.ColumnClick();
    column3.on("click", this.pieceDown.bind(this), false);
    column4 = this.view.ColumnClick();
    column4.on("click", this.pieceDown.bind(this), false);
    column5 = this.view.ColumnClick();
    column5.on("click", this.pieceDown.bind(this), false);
    column6 = this.view.ColumnClick();
    column6.on("click", this.pieceDown.bind(this), false);
    column7 = this.view.ColumnClick();
    column7.on("click", this.pieceDown.bind(this), false);

  },

  playerTurn: function(player1, player2){
    if(this.player1.turn === true) {
      this.player2.turn === false}
    else {
      this.player1.turn === false
      this.player2.turn === true
      }
      // playerModel
      // boardModel
      //player state: true or false
      //if one is true, the other is false and vice versa
    }
  },

  timer: function() {
    var move = this.setInterval(forfeitMove, 10000)
  },

  gameWon: function(){

  }


}

// 1. odd/ even clicks - create an algorithm that listens for the click and adds to the total clicks variable. (looks complicated but whatever)
// 2. player active: (boolean) -- true or false (seems easier)
// after every click on a COLUMN, you switch states/turns and start the timer


