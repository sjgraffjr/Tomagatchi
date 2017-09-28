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
 				return 'https://i.pinimg.com/originals/93/48/9a/93489a169bffb800bcccef095c388fe0.png'
 			}else if(this.age < 8){
 				return 'https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png'
 			}else{
 				return 'https://pre00.deviantart.net/f57c/th/pre/i/2013/247/4/6/mega_blastoise_by_protocol00-d6l1fpt.png'
 			}
 		}
 	}