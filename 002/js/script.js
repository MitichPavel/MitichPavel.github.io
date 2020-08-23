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

    var lang = document.querySelector('.language__item_active');
    console.log(lang);
    lang.addEventListener('click', showOptions);
    function showOptions(){
        event.preventDefault();
        var item = document.querySelectorAll('.passive');
        console.log(item);
        item.forEach(function(item){
            item.classList.toggle('hidden');
            console.log(1);
        });
    }

    // Init animation with WOW.js
    new WOW().init();

    // var btnEn = document.querySelector('.en');
    // var btnRu = document.querySelector('.ru');
    // var btnPl = document.querySelector('.pl');
    // var btnDe = document.querySelector('.de');
    // var btnEs = document.querySelector('.es');

    // btnRu.addEventListener('click', ruSwitchOn);
    // function ruSwitchOn(){
    //     document.querySelectorAll('.change').forEach(function(block){
    //         var key = block.dataset.keyName;
    //         console.log(key);
    //         console.log(content);
    //         block.innerHTML = content.ru[key];
    //     });
    // }
    // btnEn.addEventListener('click', enSwitchOn);
    // function enSwitchOn(){
    //     document.querySelectorAll('.change').forEach(function(block){
    //         var key = block.dataset.keyName;
    //         console.log(key);
    //         console.log(content);
    //         block.innerHTML = content.en[key];
    //     });
    // }
    // btnDe.addEventListener('click', deSwitchOn);
    // function deSwitchOn(){
    //     document.querySelectorAll('.change').forEach(function(block){
    //         var key = block.dataset.keyName;
    //         console.log(key);
    //         console.log(content);
    //         block.innerHTML = content.de[key];
    //     });
    // }
    // btnEs.addEventListener('click', esSwitchOn);
    // function esSwitchOn(){
    //     document.querySelectorAll('.change').forEach(function(block){
    //         var key = block.dataset.keyName;
    //         console.log(key);
    //         console.log(content);
    //         block.innerHTML = content.es[key];
    //     });
    // }
    // btnPl.addEventListener('click', plSwitchOn);
    // function plSwitchOn(){
    //     document.querySelectorAll('.change').forEach(function(block){
    //         var key = block.dataset.keyName;
    //         console.log(key);
    //         console.log(content);
    //         block.innerHTML = content.pl[key];
    //     });
    // }
};