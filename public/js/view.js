View = function() {
}

View.prototype = {
  makeBoard: function(){
    $('.col').each(function(){
      if (this.getContext){
        var ctx = this.getContext("2d")
        for (var i = 1; i <= 6; i++){
          ctx.beginPath()
          ctx.arc(50,i*100-50,45,0,2*Math.PI)
          ctx.lineWidth=6
          ctx.stroke()
          ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
          ctx.fill()
        }
      }
    })
  },
  placePiece: function (id,row,player){
    var imageObj = document.createElement('img')
    var col = document.getElementById(id)
    var ctx = col.getContext("2d")
    if (player == 1){
        imageObj.src = 'images/brick.png'
    }
    else{
      imageObj.src = 'images/rao.png'
    }
  row++
  imageObj.onload = function(){
    ctx.save()
    ctx.beginPath()
    ctx.arc(50,row*100-50,45,0,2*Math.PI, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(imageObj,+10,row*100-100)

    ctx.beginPath()
    ctx.arc(50,row*100-50,45,0,2*Math.PI, true)
    ctx.clip()
    ctx.closePath()
    ctx.restore()
  }
}
}
