const SQUIRTLE_IMAGE = "https://i.pinimg.com/originals/93/48/9a/93489a169bffb800bcccef095c388fe0.png"
const WARTURTLE_IMAGE = "https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png"
const BLASTIOSE_IMAGE = "https://pre00.deviantart.net/f57c/th/pre/i/2013/247/4/6/mega_blastoise_by_protocol00-d6l1fpt.png"
 class Tomagotchi {
	constructor(name,hunger,sleepiness,boredom,age){
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		this.dead = false; //setting the object to start the way I want to start/start out alive

	}
	death(){
		this.dead = true; //storing death in methoo
	}
	image(){
		if(this.age < 5){
			return SQUIRTLE_IMAGE
		}else if(this.age < 8){
			return WARTURTLE_IMAGE
		}else{
			return BLASTIOSE_IMAGE
		}
	}
}