class trash{
  constructor(x,y,height,width,angle){
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,angle,options);
    this.width = width;
    this.height = height;
    this.angle = angle;
    World.add(world, this.body); 
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height,this.angle);
  }
};

