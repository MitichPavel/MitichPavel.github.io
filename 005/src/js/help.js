window.onload = function(){
	// Modal
	var contact = document.querySelector('.header__contact');
	var modal = document.querySelector('.modal');
	var closeModal = document.querySelector('.modal__close');
	var socialModalItems = document.querySelectorAll('.social__item_modal');
	var modalItems = document.querySelectorAll('.modal__item');
	function swichModal(){
		modal.classList.toggle('hidden');
	}
	contact.addEventListener('click', swichModal);
	closeModal.addEventListener('click', swichModal);
	socialModalItems.forEach(function(item){
		item.addEventListener('click', swichModal);
	});
	modalItems.forEach(function(item){
		item.addEventListener('click', swichModal);
	});

	var contentDefHelp = {
		//Help
		pageTitleHelp: document.querySelector('title'),
		headerContact: document.querySelector('.header__contact'),
		helpTitle: document.querySelector('.foreign-help__title'),
		helpDescrItem: document.querySelectorAll('.foreign-help__descr-item'),
		helpSubtitle: document.querySelector('.foreign-help__subtitle'),
		helpItem: document.querySelectorAll('.foreign-help__item'),
		phone: document.querySelector('.phone'),
		footerTitle: document.querySelector('.footer__title'),
		footerAutorText: document.querySelector('.footer__autor-text'),
		modalTitle: document.querySelector('.modal__title'),
	};

	function changeLang(){
		var customLang = localStorage.getItem('customLang');
		var deviceLang = navigator.language.slice(0,2);

		function toggleActive(node){
			node.classList.toggle('lang-menu__item_active');
		}


		//Get data from json
		var xhr = new XMLHttpRequest();
		var content;
		xhr.onload = function(){
			content = JSON.parse(this.responseText);
			if(customLang === null){
				var main = document.querySelector('.lang-menu__item_' + deviceLang);
				toggleActive(main);

				if(deviceLang == 'ru'){
					changeContent(deviceLang);
					chooseLang();
				} else if (deviceLang == 'pl'){
					changeContent(deviceLang);
					chooseLang();
				} else if (deviceLang == 'en'){
					changeContent(deviceLang);
					chooseLang(deviceLang);
				} else {
					changeContent('ru');
					chooseLang();
				}
			} else {
				var main1 = document.querySelector('.lang-menu__item_' + customLang);
				toggleActive(main1);

				changeContent(customLang);
				chooseLang();
			}
		};
		xhr.open('get', '../languages.json');
		xhr.send();

		// Changing of text content
		function changeContent(lg){
			for(var key in contentDefHelp){
				if(typeof contentDefHelp[key].textContent === 'string' || contentDefHelp[key].textContent instanceof String){
					contentDefHelp[key].textContent = content[lg][key];
				} else {
					for(var i = 0; i < contentDefHelp[key].length; i++){
						contentDefHelp[key][i].textContent = content[lg][key][i];
					}
				}
			}
		}
		//**************************
		function chooseLang(){
			var tubs = document.querySelectorAll('.lang-menu__item');
			tubs.forEach(function(tub){
				tub.addEventListener('click', function(){
					localStorage.setItem('customLang', tub.textContent);
					changeContent(tub.textContent);
					
					var active = document.querySelectorAll('.lang-menu__item_active');
					active.forEach(function(activeTub){
						toggleActive(activeTub);
					});
					toggleActive(tub);
				});
			});
		}
	}
	changeLang();

	// Init animation with WOW.js
	new WOW().init();
};