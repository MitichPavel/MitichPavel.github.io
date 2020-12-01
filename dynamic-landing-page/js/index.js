window.onload = function(){
	const name = document.querySelector('.name'),
		focus = document.querySelector('.focus');


	//Clock
	function showTime(){
		const today = new Date(),
			h = today.getHours();
		let partOfDay = h < 12 ? 'AM' : 'PM';
		const time = today.toLocaleTimeString();
		const clock = `${time} ${partOfDay}`;
		document.querySelector('.time').innerText = clock;
		setTimeout(showTime, 1000);
	}

	//Set background and greating
	function setBgGreat(){
		const b = document.querySelector('body');
		const great = document.querySelector('.greating .text');
		const h = new Date().getHours();
		if(h < 12 && h > 4){
			b.style.backgroundImage = 'url("img/morning.jpg")';
			great.innerText = 'Good mornig';
		} else if (h < 18 && h > 11){
			b.style.backgroundImage = 'url("img/afternoon.jpg")';
			great.innerText = 'Good afternoon';
		} else {
			b.style.backgroundImage = 'url("img/night.jpg")';
			great.innerText = 'Good evening';
		}
	}

	//Set name
	function setName(e){
		if(e.type === 'keypress'){
			//Make sure enter is pressed
			if(e.keyCode === 13 || e.which === 13){
				localStorage.setItem('name', e.target.innerText);
				name.blur();
			}
		} else {
			localStorage.setItem('name', e.target.innerText);
		}
	}
	//Set focus
	function setFocus(e){
		if(e.type === 'keypress'){
			//Make sure enter is pressed
			if(e.keyCode === 13 || e.which === 13){
				localStorage.setItem('focus', e.target.innerText);
				focus.blur();
			}
		} else {
			localStorage.setItem('focus', e.target.innerText);
		}
	}
	function getName(){
		const savedName = localStorage.getItem('name');
		savedName ?
			name.textContent = savedName :
			name.textContent = '[Enter Name]';
	}
	function getFocus(){
		const savedFocus = localStorage.getItem('focus');
		savedFocus ?
			focus.textContent = savedFocus :
			focus.textContent = '[Enter Focus]';
	}

	name.addEventListener('keypress', setName);
	name.addEventListener('blur', setName);
	focus.addEventListener('keypress', setFocus);
	focus.addEventListener('blur', setFocus);

	showTime();
	setBgGreat();
	getName();
	getFocus();
};