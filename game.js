class	Movement {
	constructor ({
		ball,
		redBall,
		blueBall,
		smallBall,
		scoreRed,
		scoreBlue,
		controlKeys = {
			UP: "w",
			DOWN: "s", 
			LEFT: "a",
			RIGHT: "d",
		}
	})
	{
		this.redBall = redBall;
		this.blueBall = blueBall;
		this.smallBall = smallBall;
		this.scoreRed = scoreRed;
		this.scoreBlue = scoreBlue;
		this.ball = ball;
		this.intervalId = null;
		this.speed = 10;
		this.controlKeys = controlKeys;

		let subject = null;
		if(this.blueBall.style.width > this.redBall.style.width){
			this.ball == this.redBall;
			subject = this.blueBall
		}else{
			this.ball == this.blueBall;

		}
		if (this.ball == this.redBall ) {
			subject = this.blueBall
		} else {
		  subject = this.redBall;
		}

		this.subject = subject

		document.addEventListener('keydown', (event) => {
			this.onKeyDown(event.key);
		});
	};

	canEat = (subject) => {
    if (!this.ball || !subject) {
      return false;
    }

    const ballX = this.ball.offsetLeft + this.ball.offsetWidth / 2;
    const ballY = this.ball.offsetTop + this.ball.offsetHeight / 2;
    const subjectX = subject.offsetLeft + subject.offsetWidth / 2;
    const subjectY = subject.offsetTop + subject.offsetHeight / 2;

    const X = Math.pow(ballX - subjectX, 2);
    const Y = Math.pow(ballY - subjectY, 2);
    if (Math.sqrt(X + Y) <= this.ball.offsetHeight/2 + this.smallBall.offsetHeight/2) {
      return true;
    }

    return false;
  };
  registerGift = (gift) => {
	  	this.gift = gift;
	}

	onKeyDown(key) {
		const allowedKeys = Object.values(this.controlKeys);
		const controlKeys = this.controlKeys;
			if (allowedKeys.includes(key)) {
			clearInterval(this.intervalId);
			switch (key) {
				case controlKeys.UP:
					this.moveUp();
					break;

				case controlKeys.DOWN:
					this.moveDown();
					break;
				case controlKeys.LEFT:
					this.moveLeft();
					break;
				case controlKeys.RIGHT:
					this.moveRight();
					break;
				default:
					return false;
			}
		}
	};

	moveUp() {
		this.intervalId = setInterval(() => {
		const canMoveUp = this.ball.offsetTop > 200;

		if(!canMoveUp){
			return;
		}

		if (this.canEat(this.smallBall)) {
			// this.scoreRed=0;
			// this.scoreBlue=0;
			this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
			this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
			this.smallBall.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.smallBall.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.speed -= 5*this.speed/100;
			if (this.redBall.style.width > this.blueBall.style.width) {
				this.scoreRed+=1;
				console.log(this.scoreRed)
				let divForScore1 = document.getElementById("scorePlayer1");
				divForScore1.append(this.scoreRed)
			}
			if (this.blueBall.style.width > this.redBall.style.width) {
				this.scoreBlue+=1;
				console.log(this.scoreBlue)
				let divForScore2 = document.getElementById("scorePlayer2");
				divForScore2.append(this.scoreBlue)
			}
		
			// let divForScore1 = document.getElementById("scorePlayer1");
			// divForScore1.append(this.score)
			// let divForScore2 = document.getElementById("scorePlayer2");
			// divForScore2.append(this.score)
		}
		if (this.canEat(this.subject)) {
			console.log('Game over');
			this.subject.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.subject.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.subject.style.width = 100 +'px';
			this.subject.style.height = 100 +'px';
		}

		// if (this.canEat(this.ball.color)) {}
		// if(this.redBall > this.blueBall){
		// 	if (this.canEat(this.blueBall)){
		// 		this.redBall.style.width = this.redBall.offsetWidth + 10 + 'px';
		// 		this.redBall.style.height = this.redBall.offsetHeight + 10 + 'px';
		// 	}
		// }
		// if(this.blueBall > this.redBall){
		// 	if (this.canEat(this.redBall)){
		// 		this.blueBallll.style.width = this.ball.offsetWidth + 10 + 'px';
		// 		this.blueBall.style.height = this.ball.offsetHeight + 10 + 'px';
		// 	}
		// }
			

			this.ball.style.top = this.ball.offsetTop - this.speed + 'px';
		}, this.speed);
	}
		moveDown() {
		this.intervalId = setInterval(() => {
			const canMoveUp = this.ball.offsetTop  < 695;

			if(!canMoveUp){
				// alert("Game over!")
				return;
			}
			if (this.canEat(this.smallBall)) {
				this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
				this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
			this.smallBall.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.smallBall.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.speed -= 5*this.speed/100;
				
				

				// clearInterval(this.intervalId)
				// return

			}
			if (this.canEat(this.subject)) {
			console.log('Game over');
			this.subject.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.subject.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.subject.style.width = 100 +'px';
			this.subject.style.height = 100 +'px';
		}
			const top = parseInt(this.ball.style.top) +  this.speed ;
			this.ball.style.top = `${top}px`;
		}, this.speed);
	}
	moveLeft() {
		console.log(this.subject)
		this.intervalId = setInterval(() => {
		const canMoveUp = this.ball.offsetLeft  > 0;
		const left = parseInt(this.ball.style.left) -  this.speed ;

		if(!canMoveUp){
			// alert("Game over!")
			return;
		}
		if (this.canEat(this.smallBall)) {
			this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
			this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
			this.smallBall.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.smallBall.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.speed -= 5*this.speed/100;
			
		
			// clearInterval(this.intervalId)
			// return
		}

		
		if (this.canEat(this.subject)) {
			console.log('Game over');
			this.subject.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.subject.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.subject.style.width = 100 +'px';
			this.subject.style.height = 100 +'px';
		}
			// if(this.redBall.style.width > this.blueBall.style.width){
			// 	if (this.canEat(this.blueBall)){
			// 		this.redBall.style.width = this.redBall.offsetWidth + 10 + 'px';
			// 		this.redBall.style.height = this.redBall.offsetHeight + 10 + 'px';
			// 	}
			// }
			// if(this.blueBall.style.width < this.redBall.style.width){
			// 	if (this.canEat(this.redBall)){
			// 		this.blueBall.style.width = this.blueBall.offsetWidth + 10 + 'px';
			// 		this.blueBall.style.height = this.blueBall.offsetHeight + 10 + 'px';
			// 	}
			// }
			this.ball.style.left = `${left}px`;
			
		}, this.speed);
	}
	moveRight() {
		this.intervalId = setInterval(() => {
			const canMoveUp = this.ball.offsetLeft  < 1200;
			const left = parseInt(this.ball.style.left) +  this.speed ;
			if(!canMoveUp){
				// alert("Game over!")
				return;
			}
			if (this.canEat(this.smallBall)) {
				this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
				this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
				this.smallBall.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.smallBall.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.speed -= 5*this.speed/100;
				
			}
			if (this.canEat(this.subject)) {
			console.log('Game over');
			this.subject.style.top = Math.floor(Math.random() * 500) + 300 + 'px';
			this.subject.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
			this.subject.style.width = 100 +'px';
			this.subject.style.height = 100 +'px';
		}
			// if(this.redBall.style.width > this.blueBall.style.width){
			// 	if (this.canEat(this.blueBall)){
			// 		this.redBall.style.width = this.redBall.offsetWidth + 10 + 'px';
			// 		this.redBall.style.height = this.redBall.offsetHeight + 10 + 'px';
			// 	}
			// }
			// if(this.blueBall.style.width < this.redBall.style.width){
			// 	if (this.canEat(this.redBall)){
			// 		this.blueBallstyle.width = this.blueBall.offsetWidth + 10 + 'px';
			// 		this.blueBall.style.height = this.blueBall.offsetHeight + 10 + 'px';
			// 	}
			// }
			this.ball.style.left = `${left}px`;
			
			
		}, this.speed);
	}

}

class Ball {
	constructor({
		color = 'red',
		className = 'ball',
		size = 100,
		top = 0,
		left = 0,
		speed = 10,
	}) {
		


		const container = document.getElementById('container');
		const ball = document.createElement('div');
		this.ball = ball;
		this.container = container;
		ball.classList.add(className);
		ball.style.backgroundColor = color;
		ball.style.top = `${top}px`;
		ball.style.left = `${left}px`;
		ball.style.width = `${size}px`;
		ball.style.height = `${size}px`;
		this.smallBall = null;
		container.append(ball)

		// const smallBall = document.getElementsByClassName('small-ball');
		// this.smallBall = smallBall;
	}





	// moveDown() {
	// 	this.intervalId = setInterval(() => {
	// 		const canMoveUp = this.ball.offsetTop  < 695;

	// 		if(!canMoveUp){
	// 			// alert("Game over!")
	// 			return;
	// 		}
	// 		if (this.canEat(this.gift)) {
	// 			this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
	// 			this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
	// 			this.gift.ball.style.top =  Math.floor(Math.random() * 700) + 100+ 'px';
	// 			this.gift.ball.style.left =  Math.floor(Math.random() * 1200) + 100 + 'px';
	// 			this.speed -=5*this.speed/100;
				
				

	// 			// clearInterval(this.intervalId)
	// 			// return
	// 		}
	// 		// if(this.redBall.style.width > this.blueBall.style.width){
	// 		// 	if (this.canEat(this.blueBall)){
	// 		// 		this.redBall.style.width = this.redBall.offsetWidth + 10 + 'px';
	// 		// 		this.redBall.style.height = this.redBall.offsetHeight + 10 + 'px';
	// 		// 	}
	// 		// }
	// 		// if(this.blueBall.style.width <this.redBall.style.width){
	// 		// 	if (this.canEat(this.redBall)){
	// 		// 		this.balblueBalll.style.width = this.blueBall.offsetWidth + 10 + 'px';
	// 		// 		this.balblueBalll.style.height = this.blueBall.offsetHeight + 10 + 'px';
	// 		// 	}
	// 		// }
	// 		const top = parseInt(this.ball.style.top) +  this.speed ;
	// 		this.ball.style.top = `${top}px`;
			
	// 	}, this.speed);
	// }

	// moveRight() {
	// 	this.intervalId = setInterval(() => {
	// 		const canMoveUp = this.ball.offsetLeft  < this.container.offsetWidth - 105;
	// 		const left = parseInt(this.ball.style.left) +  this.speed ;
	// 		if(!canMoveUp){
	// 			// alert("Game over!")
	// 			return;
	// 		}
	// 		if (this.canEat(this.gift)) {
	// 			this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
	// 			this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
	// 			this.gift.ball.style.top = Math.floor(Math.random() * 700) + 100+ 'px';
	// 			this.gift.ball.style.left =  Math.floor(Math.random() * 1200) + 100 + 'px';
	// 			this.speed -=5*this.speed/100;
			
				
	// 		}
	// 		// if(this.redBall.style.width > this.blueBall.style.width){
	// 		// 	if (this.canEat(this.blueBall)){
	// 		// 		this.redBall.style.width = this.redBall.offsetWidth + 10 + 'px';
	// 		// 		this.redBall.style.height = this.redBall.offsetHeight + 10 + 'px';
	// 		// 	}
	// 		// }
	// 		// if(this.blueBall.style.width < this.redBall.style.width){
	// 		// 	if (this.canEat(this.redBall)){
	// 		// 		this.blueBallstyle.width = this.blueBall.offsetWidth + 10 + 'px';
	// 		// 		this.blueBall.style.height = this.blueBall.offsetHeight + 10 + 'px';
	// 		// 	}
	// 		// }
	// 		this.ball.style.left = `${left}px`;
			
			
	// 	}, this.speed);.
	// }
}



// function myFunction() {

//   if (validateForm()) {

	 
//   }

// 	// var x = document.forms["myForm"]["fname"].value;
// }
function validateForm() {
	let scorePlayer1 = 0;
	let scorePlayer2 = 0;
	const input1 = document.getElementById("player-1");
	const input2 = document.getElementById("player-2");
if ( input2.value === "" ||input1.value === "" ) {

	alert("The name is required");
} else if (input1.value.trim() !== input2.value.trim()){
		let login = document.getElementById("loginn");
	
		login.remove();
		let scores = document.getElementById("scoress").style.display="flex";
		let name1 = document.getElementById("namePlayer1");
		name1.append(input1.value);
		let name2 = document.getElementById("namePlayer2");
		name2.append(input2.value)
		

	



	    const ball1 = new Ball({top: Math.floor(Math.random() * 400) + 300 , left:Math.floor(Math.random() *630) +300});
		const ball2 = new Ball({top: Math.floor(Math.random() * 400) + 300 , left:Math.floor(Math.random() *700) + 650, color:'blue'});

		const ballSmall1 = new Ball({className: 'small-ball',top: Math.floor(Math.random() * 600) + 300, left:Math.floor(Math.random() * 1200) + 100, size:20, color:'purple',  controlKeys:{
					UP: "",
					DOWN: "", 
					LEFT: "",
					RIGHT: "",
				}});

		const ball1Movement = new Movement({
			scoreRed: 0,
			scoreBlue: 0,
			ball: ball1.ball,
			redBall: ball1.ball,
			blueBall: ball2.ball,
			smallBall: ballSmall1.ball,
		});

		const ball2Movement = new Movement({
			scoreRed: 0,
			scoreBlue:0,
			ball: ball2.ball,
			redBall: ball1.ball,
			blueBall: ball2.ball,
			smallBall: ballSmall1.ball,
			controlKeys:{
					UP: "ArrowUp",
					DOWN: "ArrowDown", 
					LEFT: "ArrowLeft",
					RIGHT: "ArrowRight",
				}
		});
}else{
	alert("Input different names!")
}






  // var x = document.forms["myForm"]["fname"].value;
  // console.log(x);
  // if (x == "") {
  //   alert("Name must be filled out");

   
  // }else{
  // 	alert('yes')
  // }

}

// Math.floor(Math.random() * 1400) + 100
// Math.floor(Math.random() * 790) + 50
// const ball1 = new Ball({top: Math.floor(Math.random() * this.ball.offsetHeight) + 0 ||Math.floor(Math.random() * 600) + this.ball.offsetHeight , left:Math.floor(Math.random() * this.ball.offsetLeft) + 0 || Math.floor(Math.random() * 1300) + this.ball.offsetLeft+100 ,});
// const ball2 = new Ball({top: Math.floor(Math.random() * this.ball.offsetHeight) + 0 ||Math.floor(Math.random() * 600) + this.ball.offsetHeight 6y, left:Math.floor(Math.random() * this.ball.offsetLeft) + 0 || Math.floor(Math.random() * 1300) + this.ball.offsetLeft+100 , color:'blue', });


