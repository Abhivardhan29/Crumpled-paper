class Paper
{
	constructor(x,y)
	{
		var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		}
		this.x=x;
		this.y=y;
		this.paperWidth=20;
		this.paperHeight=20;
		this.image=loadImage("paper.png")


	}

}
