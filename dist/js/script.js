window.onload = function(){
    var contact = document.querySelector('.header__contact');
    var modal = document.querySelector('.modal');
    var closeModal = document.querySelector('.modal__close');
    var socialModalItems = document.querySelectorAll('.social__item_modal');
    var modalItems = document.querySelectorAll('.modal__item');

    // Modal
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

    // Init animation with WOW.js
    new WOW().init();

    //Translate site
    // var headerContact = document.querySelector('.header__contact');
    // var mainSpecialization = document.querySelectorAll('.main__specialization');
    // var mainName = document.querySelector('.main__name');
    // var aboutMeTitle = document.querySelector('.about-me__title');
    // var aboutMeDescr = document.querySelector('.about-me__descr');
    // var aboutMeMoreText = document.querySelector('.about-me__more-text');
    // var aboutMePhone = document.querySelector('.about-me__phone');
    // var projectsTitle = document.querySelectorAll('.projects__title');
    // var projectsName = document.querySelectorAll('.projects__name');
    // var projectsDescr = document.querySelectorAll('.projects__descr');
    // var footerTitle = document.querySelector('.footer__title');
    // var footerAutorText = document.querySelector('.footer__autor-text');
    // var modalTitle = document.querySelector('.modal__title');
    // var modalName = document.querySelector('.modal__name');

    // function loadLocale(defLang) {

    //     var xhr = new XMLHttpRequest();
    //     xhr.open("GET", 'http://localhost:3000/languages.json', true);
    //     xhr.onreadystatechange = saveLocale.bind(this);
    //     xhr.onerror = function () { console.log("no found page"); };
    //     xhr.send();
    
    //     function saveLocale() { if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    //         languages = JSON.parse(xhr.responseText);
    //         console.log("languages loaded");
    //         if(defLang) changeLocale(defLang);
    //     } }
    // }
};