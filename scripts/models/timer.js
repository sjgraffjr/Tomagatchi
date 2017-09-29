const TIMER_SPEED = 8000;

class Timer {
	
//static methods you call on the class
//instance methods you call on the instance

	static start(model){ //we made this static 
		setInterval(()=>{
			model.age += 1
			if(model.age === 100){
				model.death() //death is called
			}
			window.render() //calling the render function because data is changed
		},TIMER_SPEED)

		setInterval(()=>{
			model.hunger += 1
			if(model.hunger === 10){
				model.death()  //death is called
			}
			window.render()//calling the render function because data is changed
		},TIMER_SPEED)
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
		},TIMER_SPEED)

		setInterval(()=>{
			this.model.boredom += 1
				if(this.model.boredom === 10){
				this.model.death()  //death is called
			}
			window.render()//calling the render function because data is changed
		},TIMER_SPEED)
	}

}