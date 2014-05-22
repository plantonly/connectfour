var Board = function(){
  this.board = new Array(42)
}


var Piece = function(player,index){
  this.player = player
  this.row = Math.floor(this.index / 7)
  this.column = this.index % 7
  this.index
}

var addPiece = function(){


}


