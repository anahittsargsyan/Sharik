
class Ball {
	constructor({
		color = 'red',
		className = 'ball',
		size = 100,
		top = Math.floor(Math.random() * 700) + 100 + 'px';
		left =  Math.floor(Math.random() * 1200) + 100 + 'px';,
		speed = 10,
		controlKeys = {
			UP: "w",
			DOWN: "s", 
			LEFT: "a",
			RIGHT: "d",
		}
	}) {
		
		this.speed = 10;
		this.controlKeys = controlKeys;

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
		this.gift = null;
		container.append(ball)
		document.addEventListener('keydown', (event) => {
			this.onKeyDown(event.key);
		});
		const smallBall = document.getElementsByClassName('small-ball');
		const balls = document.getElementsByClassName('ball')
		console.log(balls);
		this.smallBall = smallBall;
		this.intervalId = null;
	}

	canEat = subject => {
    if (!this.ball || !subject || !subject.ball) {
      return false;
    }

    const ballTop = this.ball.offsetTop;
    const ballLeft = this.ball.offsetLeft;
    const giftTop = subject.ball.offsetTop;
    const giftLeft = subject.ball.offsetLeft;
    const ballWidth = this.ball.offsetWidth;
    const ballHeight = this.ball.offsetHeight;
    const giftWidth = subject.ball.offsetWidth;
    const giftHeight = subject.ball.offsetHeight;

    if (
      giftLeft + giftWidth >= ballLeft &&
      giftLeft <= ballLeft + ballWidth &&
      giftTop + giftHeight >= ballTop &&
      giftTop <= ballTop + ballHeight
    ) {
      return true;
    }
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
	}

	moveUp() {
		
		this.intervalId = setInterval(() => {
			const canMoveUp = this.ball.offsetTop > 0;

			if(!canMoveUp){
				
				return;
			
			}
			if (this.canEat(this.gift)) {
				
				this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
				this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
				this.gift.ball.style.top = Math.floor(Math.random() * 700) + 100 + 'px';
				this.gift.ball.style.left = Math.floor(Math.random() * 1200) + 100 + 'px';
				this.speed -= 5*this.speed/100;

				// return
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
			if (this.canEat(this.gift)) {
				this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
				this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
				this.gift.ball.style.top =  Math.floor(Math.random() * 700) + 100+ 'px';
				this.gift.ball.style.left =  Math.floor(Math.random() * 1200) + 100 + 'px';
				this.speed -=5*this.speed/100;
				
				

				// clearInterval(this.intervalId)
				// return
			}
			// if(this.redBall.style.width > this.blueBall.style.width){
			// 	if (this.canEat(this.blueBall)){
			// 		this.redBall.style.width = this.redBall.offsetWidth + 10 + 'px';
			// 		this.redBall.style.height = this.redBall.offsetHeight + 10 + 'px';
			// 	}
			// }
			// if(this.blueBall.style.width <this.redBall.style.width){
			// 	if (this.canEat(this.redBall)){
			// 		this.balblueBalll.style.width = this.blueBall.offsetWidth + 10 + 'px';
			// 		this.balblueBalll.style.height = this.blueBall.offsetHeight + 10 + 'px';
			// 	}
			// }
			const top = parseInt(this.ball.style.top) +  this.speed ;
			this.ball.style.top = `${top}px`;
			
		}, this.speed);
	}
	moveLeft() {
	
		this.intervalId = setInterval(() => {
			const canMoveUp = this.ball.offsetLeft  > 0;
			const left = parseInt(this.ball.style.left) -  this.speed ;

			if(!canMoveUp){
				// alert("Game over!")
				return;
			}
			if (this.canEat(this.gift)) {
				this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
				this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
				this.gift.ball.style.top = Math.floor(Math.random()* 700) + 100 + 'px';
				this.gift.ball.style.left = Math.floor(Math.random()* 1200) + 100 + 'px';
				
			
				// clearInterval(this.intervalId)
				// return
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
			const canMoveUp = this.ball.offsetLeft  < this.container.offsetWidth;
			const left = parseInt(this.ball.style.left) +  this.speed ;
			if(!canMoveUp){
				// alert("Game over!")
				return;
			}
			if (this.canEat(this.gift)) {
				this.ball.style.width = this.ball.offsetWidth + 10 + 'px';
				this.ball.style.height = this.ball.offsetHeight + 10 + 'px';
				this.gift.ball.style.top = Math.floor(Math.random() * 700) + 100+ 'px';
				this.gift.ball.style.left =  Math.floor(Math.random() * 1200) + 100 + 'px';
				this.speed -=5*this.speed/100;
			
				
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



const ball1 = new Ball({});
const ball2 = new Ball({left: document.body.offsetWidth - 100, color:'blue', controlKeys:{
			UP: "ArrowUp",
			DOWN: "ArrowDown", 
			LEFT: "ArrowLeft",
			RIGHT: "ArrowRight",
		}});



const ballSmall1 = new Ball({className: 'small-ball', size:20, left:Math.floor(Math.random() * 1400) + 100, color:'purple', top:Math.floor(Math.random() * 790) + 50, controlKeys:{
			UP: "",
			DOWN: "", 
			LEFT: "",
			RIGHT: "",
		}});

ball1.registerGift(ballSmall1);
ball2.registerGift(ballSmall1);
