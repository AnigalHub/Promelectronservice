$("#Form").on("submit", function(event){
    event.preventDefault(); // Нажатие на "отправить" не обновляет страницу
    $.post("sendmail.php", $('#Form').serialize())
        .done(function(data, status){   // При успешном отправлении
            alert('Письмо отправлено, ждите когда с Вами свяжутся!');
        })
        .fail(function(xhr, statusCode, error){ // При ошибке
            alert('Ой, что-то пошло не так!');
            console.log((xhr));
            console.log(error);
        })
})