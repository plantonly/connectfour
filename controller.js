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



    // column = this.view.ColumnClick();
    // column.on("click", this.---.bind(this), false);


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


