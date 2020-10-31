class Can{
  constructor(x,y,width,height){
  var options={
     restitution:0.8,
     friction: 1,
     density:1
  
  };
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width
  this.height=height
  World.add(world,this .body)
  this.image=loadImage("coca cola.png")
  }
  display(){
      var angle=this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      imageMode(CENTER)
      stroke("green");
      strokeWeight(4);
      fill("white");
      image(this.image,0,0,this.width,this.height)
      pop();
  }
  
  }


  
