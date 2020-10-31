class Ball {
    constructor(x, y,radius) {
      var options = {
        
        'density':1.5,
        'friction': 1.5,
        'restitution':0.75
      };
      this.body = Bodies.circle(x, y ,radius, options);
      this.radius = 50
      this.image=loadImage("ball.png")
      World.add(world, this.body);
    };
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      strokeWeight(5)
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)
      pop()
    };
  };