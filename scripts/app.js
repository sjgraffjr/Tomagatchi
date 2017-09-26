console.log("Fart Bucket");
// Tomagotchi

// Description

// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and Javascript to interact with our pet.
// Requirements

// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// 	1.Create a class for you tomagotchi
 class Tomagotchi {
 		constructor(name,hunger,sleepiness,boredom,age){
 			this.name = name;
 			this.hunger = hunger;
 			this.sleepiness = sleepiness;
 			this.boredom = boredom;
 			this.age = age;
 			this.dead = false;

 		}
 		death(){
 			this.dead = true;
 		}
 	}
 class TomagotchiView {
	 		constructor(model){
	 			this.model = model;
	 		}
	 		render(){  //this method controls what's on the page 
	 			 
	 			 if(this.model.dead){
	 			 	return `<h1>${this.model.name} is dead</h1>`

	 			 }else{

	 			 	return ` <div><h1>${this.model.name}</h1>
	 			 		<input value="${this.model.name}"/> 
	 			 		<div>Hunger Level: ${this.model.hunger}</div>
	 			 		<div>Sleepiness Level: ${this.model.sleepiness}</div> 
	 			 		<div>Boredom Level: ${this.model.boredom}</div>
	 			 		<div>Age: ${this.model.age}</div> 
	 			 		</div>`
	 			 }

	 		}

 }

 class ButtonView {
 	render(){
 		return `<button>feed</button>
 				<button>lights</button>
 				<button>play</button>`


 	}

 }




 	const squirtle = new Tomagotchi('squirtle',2,4,5,1);
 	const squirtleView = new TomagotchiView(squirtle);
 	const buttonView = new ButtonView()
 	const render = () => {
 		$('#app').html([squirtleView.render(), buttonView.render()])
 }
 	render();

	$('#app').find('input').on('change',(e)=> {
	 			 			//e is an event object you need it to make the function work
	 			 				squirtle.name  = e.target.value
	 			 				render()
	 			 		})
	setInterval(()=>{
		squirtle.age += 1
		if(squirtle.age === 10){
			squirtle.death()
		}
		render()
	},1000 * 60)

	setInterval(()=>{
		squirtle.hunger += 3
		if(squirtle.hunger === 10){
			squirtle.death()
		}
		render()
	},3000)
	setInterval(()=>{
		squirtle.sleepiness += 2
			if(squirtle.sleepiness === 10){
			squirtle.death()
		}
		render()
	},1000)

	setInterval(()=>{
		squirtle.boredeom += 4
			if(squirtle.boredeom === 10){
			squirtle.death()
		}
		render()
	},2000)



// 	2.Display a character of your choice on the screen to represent your pet
// 	3.Display the following metrics for your pet. Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age

// 	4.Add buttons to the screen to feed your pet, turn off the lights, and play with your pet
// 	5.Add the ability to name your pet
// 	6.Style the page
// 	7.Increase your pet's age every x minutes
// 	8.Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// 	9.You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// 	10.Morph your pet at certain ages
// 	11.Animate your pet across the screen








