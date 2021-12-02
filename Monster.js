class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/9, options)
		World.add(world, this.body);

	}

	loss(){
		//Si la posicion de cualquier cuerpo es mayor a 2100 (lo suficiente para salirse de la pantalla)
		if(this.body.position.x > 2100){
			//Establece el estado del juego a "win"
			gameState = "win";
		}
	}
	display()
	{
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
