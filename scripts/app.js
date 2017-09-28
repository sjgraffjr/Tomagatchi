console.log("Fart Bucket");
// Tomagotchi

// Description

// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and Javascript to interact with our pet.
// Requirements

// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// 	1.Create a class for you tomagotchi

//views build html and models store data
 	const squirtle = new Tomagotchi('squirtle',1,1,1,1); //setting up the data in the model
 	const squirtleView = new TomagotchiView(squirtle); //setting up a view to build the Html
 	const buttonView = new ButtonView() //setting up a another view to build html 
 	const render = () => { //the render functions builds the html and put its on the page
 		$('#app').html([squirtleView.render(), buttonView.render()])//this calling ButtonView and TomagatchiView
 		$('#app').find('input').on('change',(e)=> {
	 			 			//e is an event object you need it to make the function work
	 			 				squirtle.name  = e.target.value
	 			 				render()
	 			 		})
 		// find all the buttons on the page
 		$('button').on('click',(e)=>{
 			if(e.currentTarget.textContent === 'feed'){ // listen for click events on feed button
 				squirtle.hunger -= 1
 			}else if(e.currentTarget.textContent === 'play'){ // listen for click on play button
 				squirtle.boredom -= 1

 			}else if(e.currentTarget.textContent === 'lights'){ // listen for click on play button
 				$('#app').toggleClass('dark') //toggleClass turns button and off


 			}
 			render(); //calling the render function
 		})
 		
 		// in the click event listner if the button text is feed decrease hunger, if button text is lights backgroung black
 		// hunger and play if button is clicked hunger decrease. if play clicked boredom decrease
 		//

 }
 	render();

	
	setInterval(()=>{
		squirtle.age += 1
		if(squirtle.age === 100){
			squirtle.death() //death is called
		}
		render()
	},2000)

	setInterval(()=>{
		squirtle.hunger += 1
		if(squirtle.hunger === 10){
			squirtle.death()  //death is called
		}
		render()
	},5000)
	setInterval(()=>{
		if($('#app').hasClass('dark')){
			squirtle.sleepiness -= 1
		}else{
			squirtle.sleepiness += 1
		}
		if(squirtle.sleepiness === 10){
			squirtle.death()  //death is called
		}
		render()
	},5000)

	setInterval(()=>{
		squirtle.boredom += 1
			if(squirtle.boredom === 10){
			squirtle.death()  //death is called
		}
		render()
	},5000)



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








