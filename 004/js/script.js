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

    // Language tubs
    var lang = document.querySelector('.language__item_active');
    lang.addEventListener('click', showOptions);
    function showOptions(){
        event.preventDefault();
        var item = document.querySelectorAll('.passive');
        item.forEach(function(item){
            item.classList.toggle('hidden');
        });
    }

    // Init animation with WOW.js
    new WOW().init();
};