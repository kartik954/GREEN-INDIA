class Paper{
    constructor(x,y,radius){
        var options = { 
            isStatic: false,
            restitution: 0.3,
            friction: 0.9,
            density: 0.2
        };
        this.body = MBodies.circle(x,y,radius/2,options);
        this.radius = radius/2;
        this.image = loadImage("sprites/paper.png")
        MWorld.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        this.image.scale = 10
        image(this.image, 0,0,this.radius,this.radius);
        pop();
    }
};