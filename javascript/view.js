View = function() {

}


View.prototype = {
  makeBoard: function(){
    $('.col').each(function(){
      if (this.getContext){
        var ctx = this.getContext("2d")
        for (var i = 1; i <= 7; i++){
          ctx.beginPath()
          ctx.arc(50,i*100-50,45,0,2*Math.PI)
          ctx.lineWidth=6
          ctx.stroke()
          ctx.fillStyle="#FFFFFF"
          ctx.fill()
        }
      }
    })      
  },
  placePiece: function (id,row){
    var col = document.getElementById(id)
    var ctx = col.getContext("2d")
    ctx.beginPath()
    ctx.arc(50,row*100-50,45,0,2*Math.PI)
    ctx.lineWidth=6
    ctx.stroke()
    var imageObj = new Image()
    ctx.fillStyle="#FF0000"
    ctx.fill()
  }
}
view = new View
view.makeBoard()
view.placePiece(1,6)
