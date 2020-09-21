window.onload = function(){
	// Modal
	// var contact = document.querySelector('.header__contact');
	// var modal = document.querySelector('.modal');
	// var closeModal = document.querySelector('.modal__close');
	// var socialModalItems = document.querySelectorAll('.social__item_modal');
	// var modalItems = document.querySelectorAll('.modal__item');
	// function swichModal(){
	// 	modal.classList.toggle('modal_hidden');
	// }
	// contact.addEventListener('click', swichModal);
	// closeModal.addEventListener('click', swichModal);
	// socialModalItems.forEach(function(item){
	// 	item.addEventListener('click', swichModal);
	// });
	// modalItems.forEach(function(item){
	// 	item.addEventListener('click', swichModal);
	// });

	var deviceLang = navigator.language.slice(0,2);
	if(deviceLang == 'ru'){
		console.log('ru');
	} else if (deviceLang == 'pl') {
		console.log('pl');
	} else if (deviceLang == 'en') {
		console.log('en');
	} else {
		console.log('en');
	}
	var contentDefaultHelp = {
		//Help
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

	var pl = document.querySelector('.lang-menu__item_pl');
	var en = document.querySelector('.lang-menu__item_en');
	var ru = document.querySelector('.lang-menu__item_ru');

	var content;

	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if(this.status === 200){
			try {
				content = JSON.parse(this.responseText);
				changeLang(contentDefaultHelp);
			} catch (e) {
				console.warn('There was an error in JSON. Could not parse.');
			}
		} else {
			console.warn('Did not recive 200 ok from response!');
		}
	};

	xhr.open('get', '../languages.json');
	xhr.send();

	function changeLang(contentDefault){
		if(deviceLang == 'pl'){
			pl.classList.add('lang-menu__item_active');
			pl.classList.remove('passive');
			en.classList.add('passive', 'hidden');
			ru.classList.add('passive', 'hidden');
		} else if (deviceLang == 'ru'){
			ru.classList.add('lang-menu__item_active');
			ru.classList.remove('passive');
			en.classList.add('passive', 'hidden');
			pl.classList.add('passive', 'hidden');
		} else if (deviceLang == 'en'){
			en.classList.add('lang-menu__item_active');
			en.classList.remove('passive');
			pl.classList.add('passive', 'hidden');
			ru.classList.add('passive', 'hidden');
		}
		for(var key in contentDefault){
			if(typeof contentDefault[key].textContent === 'string' || contentDefault[key].textContent instanceof String) {
				contentDefault[key].textContent = content[deviceLang][key];
			} else {
				for(var i = 0; i < contentDefault[key].length; i++){
					contentDefault[key][i].textContent = content[deviceLang][key][i];
				}
			}
		}

		var lang = document.querySelector('.lang-menu__item_active');
		lang.addEventListener('click', showOptions);
	}

	function showOptions(){

		var items = document.querySelectorAll('.passive');
		console.log('onkclick ----------------');

		items.forEach(function(item){
			console.log(item);
			console.log(item.classList.contains('hidden'));
			item.classList.toggle('hidden');
			console.log(item.classList.contains('hidden'));
		});
		items.forEach(function(item){
			item.addEventListener('click', function(){
				deviceLang = item.innerHTML;
				clearClassListLang();
				changeLang(contentDefaultHelp);
			});
		});
	}
	function clearClassListLang(){
		var langItems = document.querySelectorAll('.lang-menu__item');
		langItems.forEach(function(item){
			function isHasClass(cssClass){
				return item.classList.contains(cssClass);
			}
			var active = isHasClass('lang-menu__item_active');
			var passive = isHasClass('passive');
			var hidden = isHasClass('hidden');
			if(active == true){
				item.classList.remove('lang-menu__item_active');
			} else if(passive == true){
				item.classList.remove('passive');
			} else if(hidden == true){
				item.classList.remove('hidden');
			}
		});
	}




	// const content = {
	// 	en: {
	// 		headerContact: "Contact",
	// 		mainSpecialization: ["Poliglot", "Busines coach"],
	// 		mainName: "Nataliia Antoshchuk",
	// 		aboutMeTitle: "A little bit about me",
	// 		aboutMeDescr: "I am an MA in International Finance, Entrepreneurship and Economics. I have been speaking foreign languages ​​since I was 4. I effectively teach foreign languages ​​using an innovative method. I help in solving complex issues of foreigners abroad. I love to travel. Traveling gives a lot of interesting things, you get to know the culture of the country, the peculiarities of communication and linguistic slang. A person discovers a lot of new things while traveling.",
	// 		phone: "Call me",
	// 		projectsTitle:["My Projects", "My Projects"],
	// 		projectsName: ["Language school", "Foreign help"],
	// 		projectsSubtitle: [ "Let's learn a foreign language", "Professional help with documents"],
	// 		footerTitle: "Social links & Contacts",
	// 		footerAutorText: "Made by",
	// 		modalTitle: "Contact me",
	// 		//School
	// 		schoolTitle: "Language school",
	// 		schoolSubtitle: "Steps to learning languages",
	// 		schoolItem: ["Choosing a teaching method", "Choosing a suitable schedule", "Studying basic grammar", "We talk every day or do tasks for learning a language", "You show excellent results!"],
	// 		langTitle: "I can teach you to speak foreign languages",
	// 		langItem: ["Russian", "English", "German", "Spanish", "Belarusian", "Polish", "Ukrainian"],
	// 		//Help
	// 		helpTitle: "Questions I deal with",
	// 		helpDescrItem: ["Business correspondence", "Protection of your interests in state authorities", "Family legalization in Poland", "Resolving issues in difficult situations"],
	// 		helpSubtitle: "Steps for resolving issues",
	// 		helpItem: ["You call with a question of interest", "I advise you where to go or act as your authorized person", "We solve the issue", "We are waiting for a positive result together!"],
	// 	},
	// 	ru: {
	// 		headerContact: "Контакты",
	// 		mainSpecialization: ["Полиголот", "Бизнес коуч",],
	// 		mainName: "Натали Антощук",
	// 		aboutMeTitle: "Обо мне",
	// 		aboutMeDescr: "Я магистр международных финансов, предпринимательства и экономики. Разговариваю на иностранных языках с 4 лет. Эффективно обучаю иностранным языкам по новаторской методике. Помогаю в решении сложных вопросов иностранцев за границей. Люблю путешествовать. Путешествия дают много интересного, узнаешь культуру страны, особенности общенияб языковые сленги. Человек во время путешествия открывает для себя много нового.",
	// 		phone: "Позвони мне",
	// 		projectsTitle: ["Мои Проекты", "Мои Проекты"],
	// 		projectsName: ["Языковая школа", "Помощ иностранцам"],
	// 		projectsSubtitle: ["Давай выучим иностранный язык", "Профессиональная помощь с документами"],
	// 		footerTitle: "Соцсети & Контакты",
	// 		footerAutorText: "Создано",
	// 		modalTitle: "Свяжись со мной",
	// 		// School
	// 		schoolTitle: "Языковая школа",
	// 		schoolSubtitle: "Шаги изучения языков",
	// 		schoolItem: ["Выбираем методику обучения", "Подбираем подходящий график", "Изучаем базовую грамматику", "Ежедневно беседуем или делаем задания на изучение языка", "Показываешь отличный результат!"],
	// 		langTitle: "Я могу тебя научить говорить на иностранных языках",
	// 		langItem: ["Русский", "Анлийский", "Немецкий", "Испанский", "Белорусский", "Польский", "Украинский"],
	// 		//Help
	// 		helpTitle: "Вопросы, которыми я занимаюсь",
	// 		helpDescrItem: ["Ведение деловой кореспонденции", "Защита твоих интересов в государственных инстанциях", "Легализация семьи в Польше", "Решение вопросов в трудных ситуациях"],
	// 		helpSubtitle: "Шаги решения вопросов",
	// 		helpItem: ["Звонишь с интересующим вопросом", "Советую куда обратиться либо выступаю твоим уполномоченным лицом", "Решаем вопрос", "Ждем позитивный результат вместе!"],
	// 	},
	// 	pl: {
	// 		headerContact: "Kontakty",
	// 		mainSpecialization: ["Polygolot", "Trener biznesu",],
	// 		mainName: "Natali Antoshchuk",
	// 		aboutMeTitle: "O mnie",
	// 		aboutMeDescr: "Jestem magistrem finansów międzynarodowych, przedsiębiorczości i ekonomii. Językami obcymi mówię od 4 roku życia. Skutecznie uczę języków obcych nowatorską metodą. Pomagam w rozwiązywaniu złożonych problemów cudzoziemców za granicą. Kocham podróżować. Podróżowanie daje wiele ciekawych rzeczy, poznaje się kulturę kraju, specyfikę komunikacji i slang językowy. Podczas podróży człowiek odkrywa wiele nowych rzeczy.",
	// 		phone: "Zadzwoń",
	// 		projectsTitle: ["Moje projekty", "Moje projekty"],
	// 		projectsName: ["Szkoła językowa", "Wsparcie cudzoziemcom"],
	// 		projectsSubtitle: ["Nauczmy się języka obcego", "Fachowa pomoc przy dokumentach"],
	// 		footerTitle: "Media społecznościowe & kontakty",
	// 		footerAutorText: "Stworzone przez",
	// 		modalTitle: "Skontaktuj się ze mną",
	// 		// School
	// 		schoolTitle: "Szkoła językowa",
	// 		schoolSubtitle: "Kroki do nauki języków",
	// 		schoolItem: ["Wybór metodyki nauczania", "Wybór odpowiedniego harmonogramu", "Nauka podstaw gramatyki", "Codziennie rozmawiamy lub wykonujemy zadania do nauki języków", "Wykazujesz doskonałe wyniki!"],
	// 		langTitle: "Mogę Cię nauczyć mówić w językach obcych",
	// 		langItem: ["Rosyjski", "Angielski", "Niemiecki", "Hiszpański", "Białoruski", "Polski", "Ukraiński"],
	// 		//Help
	// 		helpTitle: "Pytania, którymi się zajmuję",
	// 		helpDescrItem: ["Korespondencja biznesowa", "Ochrona Twoich interesów we władzach państwowych", "Legalizacja rodziny w Polsce", "Rozwiązywanie problemów w sytuacjach trudnych"],
	// 		helpSubtitle: "Kroki rozwiązywania problemów",
	// 		helpItem: ["Dzwonisz z interesującym Cię pytaniem", "Radzę, gdzie się zwrócić lub działać jako osoba upoważniona", "Rozwiązujemy problem", "Razem czekamy na pozytywny wynik!"],
	// 	},
	// };


	// if(deviceLang == 'pl' || 'en'){
	// 	ru.addEventListener('click', function(){
	// 		deviceLang = 'ru';
	// 		changeLang(contentDefaultHelp);
	// 	});
	// } 
	// if(deviceLang == 'ru' || 'pl'){
	// 	en.addEventListener('click', function(){
	// 		deviceLang = 'en';
	// 		changeLang(contentDefaultHelp);
	// 	});
	// }
	// if(deviceLang == 'en' || 'ru'){
	// 	pl.addEventListener('click', function(){
	// 		deviceLang = 'pl';
	// 		changeLang(contentDefaultHelp);
	// 	});
	// }

	// function langChoose(){
	// 	this.addEventListener('click', function(){
	// 		var ru = this.classList.contains('lang-menu__item_ru');
	// 		var en = this.classList.contains('lang-menu__item_en');
	// 		var pl = this.classList.contains('lang-menu__item_pl');
	// 		if(ru){
	// 			deviceLang = 'ru';
	// 			changeLang(contentDefaultHelp);
	// 		}
	// 		if(en){
	// 			deviceLang = 'en';
	// 			changeLang(contentDefaultHelp);
	// 		}
	// 		if(pl){
	// 			deviceLang = 'pl';
	// 			changeLang(contentDefaultHelp);
	// 		}
	// 	});
	// }
};