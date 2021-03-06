$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
        $('.scroll-animations .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInLeft');
            }
        });
    });
});
function stringToArray(string) {
    var array = [],
        length = string.length,
        index = 0;
    for(; index < length; ++index) {
        array.push(string[index]);
    }
    return array;
}
function splitText() {
    var context = $('[data-magic-text]'),
        contents = context.text(),
        letters = stringToArray(contents),
        markup = '';
    letters.forEach(function(letter) {
        markup += '<span>' + letter + '</span>';
    });
    context.html(markup);
}
function animateText() {
    var context = $('[data-magic-text]'),
        delay = 200;
    context.children().each(function(index, letter) {
        setTimeout(function() {
            $(letter).addClass('is-visible');
        }, delay * (index / 15));
    });
}
$('#step1').click(
    function() {
        splitText();
        animateText();
    });
$('#step2').click(
    function() {
        splitText();
        animateText();
    });
$('#step3').click(
    function() {
        splitText();
        animateText();
    });
$('#step4').click(
    function() {
        splitText();
        animateText();
    });
let active = document.getElementById("step1");
let message = document.getElementById("mess");
let currentStep = document.getElementById("currentStep");

function changeMessage(step){
    toogleActiveStyle(step);
    if(step.id == 'step1'){
        currentStep.innerHTML = "1 этап";
        message.innerHTML = "Вы связываетесь с нами любым удобным для Вас способом. Заявка может быть направлена по факсу, на электронную почту.";
    } else if(step.id == 'step2'){
        currentStep.innerHTML = "2 этап";
        message.innerHTML = "Наши специалисты в кратчайшие сроки проведут анализ продукции (услуг), необходимой Заказчику, окажут техническую поддержку. Спланируют индивидуальные графики поставок (выполнение работ).";
    } else if (step.id == 'step3') {
        currentStep.innerHTML = "3 этап";
        message.innerHTML = "Сотрудники компании оперативно подготовят договор, счет на оплату. Учтут пожелание клиента. Возможен гибкий подход к оплате, работа при неполном авансировании или постоплате.";
    } else if (step.id == 'step4') {
        currentStep.innerHTML = "4 этап";
        message.innerHTML = "Наличие на складе компании постоянно возобновляемый запас наиболее часто применяемых типов ЭКБ позволит сократить сроки поставки. Доставка продукции осуществляется логистическими компаниями. Весь доставляемый груз застрахован в страховой компании.";
    }
    active = step;
}
function toogleActiveStyle(step){
    if (active != step) {
        active.classList.toggle("active");
        step.classList.toggle("active");
    }
}
