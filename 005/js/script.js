window.onload = function(){

    const indexLogo = document.querySelector('.header__logo_index');
    indexLogo.onclick = function(e){
        e.preventDefault();
    };

    // Modal
    var contact = document.querySelector('.header__contact');
    var modal = document.querySelector('.modal');
    var closeModal = document.querySelector('.modal__close');
    var socialModalItems = document.querySelectorAll('.social__item_modal');
    var modalItems = document.querySelectorAll('.modal__item');
    function swichModal(){
        modal.classList.toggle('modal_hidden');
    }
    contact.addEventListener('click', swichModal);
    closeModal.addEventListener('click', swichModal);
    socialModalItems.forEach(function(item){
        item.addEventListener('click', swichModal);
    });
    modalItems.forEach(function(item){
        item.addEventListener('click', swichModal);
    });

    // Language tubs
    var lang = document.querySelector('.lang-menu__item_active');
    lang.addEventListener('click', showOptions);
    function showOptions(e){
        e.preventDefault();
        var item = document.querySelectorAll('.passive');
        item.forEach(function(item){
            item.classList.toggle('hidden');
        });
    }

    const content = {
        en: {
            headerContact: "Contact",
            mainSpecialization: ["Poliglot", "Busines coach"],
            mainName: "Nataliia Antoshchuk",
            aboutMeTitle: "A little bit about me",
            aboutMeDescr: "I am an MA in International Finance, Entrepreneurship and Economics. I have been speaking foreign languages ​​since I was 4. I effectively teach foreign languages ​​using an innovative method. I help in solving complex issues of foreigners abroad. I love to travel. Traveling gives a lot of interesting things, you get to know the culture of the country, the peculiarities of communication and linguistic slang. A person discovers a lot of new things while traveling.",
            phone: "Call me",
            projectsTitle:["My Projects", "My Projects"],
            projectsName: ["Language school", "Foreign help"],
            projectsSubtitle: [ "Let's learn a foreign language", "Professional help with documents"],
            footerTitle: "Social links & Contacts",
            footerAutorText: "Made by",
            modalTitle: "Contact me",
            //School
            schoolTitle: "Language school",
            schoolSubtitle: "Steps to learning languages",
            schoolItem: ["Choosing a teaching method", "Choosing a suitable schedule", "Studying basic grammar", "We talk every day or do tasks for learning a language", "You show excellent results!"],
            langTitle: "I can teach you to speak foreign languages",
            langItem: ["Russian", "English", "German", "Spanish", "Belarusian", "Polish", "Ukrainian"],
            //Help
            helpTitle: "Questions I deal with",
            helpDescrItem: ["Business correspondence", "Protection of your interests in state authorities", "Family legalization in Poland", "Resolving issues in difficult situations"],
            helpSubtitle: "Steps for resolving issues",
            helpItem: ["You call with a question of interest", "I advise you where to go or act as your authorized person", "We solve the issue", "We are waiting for a positive result together!"],
        },
        ru: {
            headerContact: "Контакты",
            mainSpecialization: ["Полиголот", "Бизнес коуч",],
            mainName: "Натали Антощук",
            aboutMeTitle: "Обо мне",
            aboutMeDescr: "Я магистр международных финансов, предпринимательства и экономики. Разговариваю на иностранных языках с 4 лет. Эффективно обучаю иностранным языкам по новаторской методике. Помогаю в решении сложных вопросов иностранцев за границей. Люблю путешествовать. Путешествия дают много интересного, узнаешь культуру страны, особенности общенияб языковые сленги. Человек во время путешествия открывает для себя много нового.",
            phone: "Позвони мне",
            projectsTitle: ["Мои Проекты", "Мои Проекты"],
            projectsName: ["Языковая школа", "Помощ иностранцам"],
            projectsSubtitle: ["Давай выучим иностранный язык", "Профессиональная помощь с документами"],
            footerTitle: "Соцсети & Контакты",
            footerAutorText: "Создано",
            modalTitle: "Свяжись со мной",
            // School
            schoolTitle: "Языковая школа",
            schoolSubtitle: "Шаги изучения языков",
            schoolItem: ["Выбираем методику обучения", "Подбираем подходящий график", "Изучаем базовую грамматику", "Ежедневно беседуем или делаем задания на изучение языка", "Показываешь отличный результат!"],
            langTitle: "Я могу тебя научить говорить на иностранных языках",
            langItem: ["Русский", "Анлийский", "Немецкий", "Испанский", "Белорусский", "Польский", "Украинский"],
            //Help
            helpTitle: "Вопросы, которыми я занимаюсь",
            helpDescrItem: ["Ведение деловой кореспонденции", "Защита твоих интересов в государственных инстанциях", "Легализация семьи в Польше", "Решение вопросов в трудных ситуациях"],
            helpSubtitle: "Шаги решения вопросов",
            helpItem: ["Звонишь с интересующим вопросом", "Советую куда обратиться либо выступаю твоим уполномоченным лицом", "Решаем вопрос", "Ждем позитивный результат вместе!"],
        },
        pl: {
            headerContact: "Kontakty",
            mainSpecialization: ["Polygolot", "Trener biznesu",],
            mainName: "Natali Antoshchuk",
            aboutMeTitle: "O mnie",
            aboutMeDescr: "Jestem magistrem finansów międzynarodowych, przedsiębiorczości i ekonomii. Językami obcymi mówię od 4 roku życia. Skutecznie uczę języków obcych nowatorską metodą. Pomagam w rozwiązywaniu złożonych problemów cudzoziemców za granicą. Kocham podróżować. Podróżowanie daje wiele ciekawych rzeczy, poznaje się kulturę kraju, specyfikę komunikacji i slang językowy. Podczas podróży człowiek odkrywa wiele nowych rzeczy.",
            phone: "Zadzwoń",
            projectsTitle: ["Moje projekty", "Moje projekty"],
            projectsName: ["Szkoła językowa", "Wsparcie cudzoziemcom"],
            projectsSubtitle: ["Nauczmy się języka obcego", "Fachowa pomoc przy dokumentach"],
            footerTitle: "Media społecznościowe & kontakty",
            footerAutorText: "Stworzone przez",
            modalTitle: "Skontaktuj się ze mną",
            // School
            schoolTitle: "Szkoła językowa",
            schoolSubtitle: "Kroki do nauki języków",
            schoolItem: ["Wybór metodyki nauczania", "Wybór odpowiedniego harmonogramu", "Nauka podstaw gramatyki", "Codziennie rozmawiamy lub wykonujemy zadania do nauki języków", "Wykazujesz doskonałe wyniki!"],
            langTitle: "Mogę Cię nauczyć mówić w językach obcych",
            langItem: ["Rosyjski", "Angielski", "Niemiecki", "Hiszpański", "Białoruski", "Polski", "Ukraiński"],
            //Help
            helpTitle: "Pytania, którymi się zajmuję",
            helpDescrItem: ["Korespondencja biznesowa", "Ochrona Twoich interesów we władzach państwowych", "Legalizacja rodziny w Polsce", "Rozwiązywanie problemów w sytuacjach trudnych"],
            helpSubtitle: "Kroki rozwiązywania problemów",
            helpItem: ["Dzwonisz z interesującym Cię pytaniem", "Radzę, gdzie się zwrócić lub działać jako osoba upoważniona", "Rozwiązujemy problem", "Razem czekamy na pozytywny wynik!"],
        },
    };
    // var jsonContent = JSON.stringify(content);
    // console.log(jsonContent);

    var deviceLang = navigator.language.slice(0,2);
    deviceLang = "pl";
    if(deviceLang == 'ru'){
        console.log('ru');
    } else if (deviceLang == 'pl') {
        console.log('pl');
    } else if (deviceLang == 'en') {
        console.log('en');
    } else {
        console.log('en');
    }
    // var xhr = new XMLHttpRequest();
    // var result = xhr.open("GET", 'http://localhost:3000/language.json', true);
    // xhr.send();
    // console.log(result);

    var contentDefaultIndex = {
        //Index
        headerContact: document.querySelector('.header__contact'),
        mainSpecialization: document.querySelectorAll('.main__specialization'),
        mainName: document.querySelector('.main__name'),
        aboutMeTitle: document.querySelector('.about-me__title'),
        aboutMeDescr: document.querySelector('.about-me__descr'),
        phone: document.querySelector('.phone'),
        projectsTitle: document.querySelectorAll('.projects__title'),
        projectsName: document.querySelectorAll('.projects__name'),
        projectsSubtitle: document.querySelectorAll('.projects__subtitle'),
        footerTitle: document.querySelector('.footer__title'),
        footerAutorText: document.querySelector('.footer__autor-text'),
        modalTitle: document.querySelector('.modal__title'),
    };
    function changeLang(contentDefault){
        for(var key in contentDefault){
            // console.log(contentDefault[key]);
            if(typeof contentDefault[key].textContent === 'string' || contentDefaultIndex[key].textContent instanceof String) {
                contentDefault[key].textContent = content[deviceLang][key];
            } else {
                for(var i = 0; i < contentDefault[key].length; i++){
                    // console.log(content[deviceLang][key][i]);
                    contentDefault[key][i].textContent = content[deviceLang][key][i];
                }
            }
        }
        console.log('translation is finished');
    }
    changeLang(contentDefaultIndex);

    // Init animation with WOW.js
    new WOW().init();
};