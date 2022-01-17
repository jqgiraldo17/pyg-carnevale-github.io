$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000
      });
    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;

    // $(window).scroll(function(){
    //     scroll = $(window).scrollTop();  

    //     if(scroll > 200){
    //         if(!flag){
    //             $('#logo').css({"margin-top":"-5px","width":"150px","height":"auto"});
    //             $('header').css({"background-color": "transparent", "border":"blue"});
    //             flag = true;
    //         }
    //     } else {
    //         if(flag){
    //             $('#logo').css({"margin-top":"150px","width":"300px","height":"auto"});
    //             $('header').css({"background-color": "transparent"});            
    //             flag = false;
    //         }
    //     }
    // });
});
const button = document.querySelector('button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('activated');
});

const menuButtons = document.querySelectorAll('.menu__button');

const menuButtonsArray = Array.from(menuButtons);

menuButtonsArray.forEach(button => {

    button.addEventListener('click', () => {

       closeAnotherButtons(button);       
       button.classList.toggle('activated');       
              
    });
}); 

function closeAnotherButtons(activeButton) {

    menuButtonsArray.forEach(button => {
        
        if(button != activeButton) {        
            if(button.classList.contains('activated')) {
                button.classList.remove('activated');           
            } 
        }

    });
} 