class Dustbin{
    constructor(){
        var options = {
            isStatic : true
        };
        this.rect1 = MBodies.rectangle(600,500,10,10,options);
        this.rect2 = MBodies.rectangle(570,610,10,10,options);
        this.rect3 = MBodies.rectangle(760,560,10,10,options); 
        this.image = loadImage("sprites/dustbingreen.png"); 
        MWorld.add(world,this.rect1);
	    MWorld.add(world,this.rect2);
	    MWorld.add(world,this.rect3);
    }
    display(){
        fill("yellow");
    image(this.image, this.rect1.position.x, this.rect1.position.y, 130, 160);
    //rect(this.rect2.position.x, this.rect2.position.y, 20, 150);
    //rect(this.rect3.position.x, this.rect3.position.y, 20, 100);
    }
}