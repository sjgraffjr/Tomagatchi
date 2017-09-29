const AGE_SPEED = 8000;
const HUNGER_SPEED = 8000;
const SLEEPINESS_SPEED = 8000;
const BOREDOM_SPEED = 8000;

class Timer {
	
	// using a class method because the timer doesn't have its own data
	// for example how long its been running
	static start(model){ 

		setInterval(()=>{
			model.age += 1
			if(model.age === 15){
				model.death() //death is called
			}
			window.render() //calling the render function because data is changed
		}, AGE_SPEED)

		setInterval(()=>{
			model.hunger += 1
			if(model.hunger === 10){
				model.death()  //death is called
			}
			window.render()//calling the render function because data is changed
		}, HUNGER_SPEED)

		setInterval(()=>{
			if($('#app').hasClass('dark')){
				model.sleepiness -= 1
			}else{
				model.sleepiness += 1
			}
			if(model.sleepiness === 10){
				model.death()  //death is called
			}
			window.render()//calling the render function because data is changed
		}, SLEEPINESS_SPEED)

		setInterval(()=>{
			this.model.boredom += 1
				if(this.model.boredom === 10){
				this.model.death()  //death is called
			}
			window.render()//calling the render function because data is changed
		}, BOREDOM_SPEED)
	}

}