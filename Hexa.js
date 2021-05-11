class Hexa {
    constructor(x,y){
        var options = {
            'restitution':0.08,
            'friction':1.0,
            'density':1.0
        }
    this.body = Bodies.rectangle(x,y,1,1,options);
    this.image = loadImage("polygon.png");
     World.add(world, this.body);

    }
  
    display() {
        var pos=this.body.position;
      push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,15,10,40,40);
        pop(); 
    }
  }