function makeBoard(){
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
}

makeBoard()

function fillCircle(id,row){
  var col = document.getElementById(id)
  var ctx = col.getContext("2d")
  // ctx.beginPath()
  // ctx.arc(50,row*100-50,45,0,2*Math.PI)
  // ctx.lineWidth=6
  // ctx.stroke()
  // var imageObj = new Image()

  // ctx.fillStyle="#FF0000"
  // ctx.fill()

  var imageObj = document.createElement('img')
  imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'

  imageObj.onload = function(){
    ctx.save()
    ctx.beginPath()
    ctx.arc(50,row*100-50,45,0,2*Math.PI, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(imageObj,-175,row*100-130)
    
    ctx.beginPath()
    ctx.arc(50,row*100-50,45,0,2*Math.PI, true)
    ctx.clip()
    ctx.closePath()
    ctx.restore()    

  }





}

fillCircle(1,6)
fillCircle(2,6)
