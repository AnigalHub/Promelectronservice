<?php
if(empty($_POST['name']) || empty($_POST['company']) || empty($_POST['mail']) || empty($_POST['phone']) || empty($_POST['message'])){
    http_response_code(400);
    echo "Все поля должны быть заполнены!";
    return;
}

$name = $_POST['name'];
$message = $_POST['message'];
$company = $_POST['company'];
$email = $_POST['mail'];
$tel = $_POST['phone'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'source/PHPMailer/src/PHPMailer.php';
require  'source/PHPMailer/src/SMTP.php';
require  'source/PHPMailer/src/Exception.php';
$mail = new PHPMailer(false);

    //Server settings
    $mail->isSMTP();                                                //
    $mail->Host         = 'smtp.yandex.ru';                         //  Сервер
    $mail->SMTPAuth     = true;                                     //  Нужна ли аутинтификация
    $mail->Username     = 'transfer@promelektronservis.ru';         //  логин от почты
    $mail->Password     = 'chEgEHiM5c';                             //  пароль
    $mail->SMTPSecure   = PHPMailer::ENCRYPTION_SMTPS;              //  способ транспортировки SSL
    $mail->Port         = 465;                                      //  порт приема на сревере SSL
    $mail->CharSet      = "UTF-8";                                  //  Включваем кириллицу
    $mail->Encoding     = "base64";                                 //
    //Recipients
    $mail->Sender = 'transfer@promelektronservis.ru';
    $mail->setFrom('info@promelektronservis.ru', 'Заявки от Компаний', false); // От кого
    $mail->addAddress('info@promelektronservis.ru');// Кому

    // Content
    $mail->isHTML(true);
    $mail->Subject  = 'Заявка от ' . $_POST['company'];
    $mail->Body     = "<html>
    <body> 
        <div style='font-size: 16px;'>
            {$message} 
        </div>
        <br>
        <span style='font-weight: 700; font-size: 15px; color: black'>С Уважением, {$name} </span> 
        <br>
        <span style='font-weight: 600; font-size: 15px;color: black'>Телефон: </span> <span style='font-size: 15px;color: black'> {$tel} </span>  
        <br>
        <span style='font-weight: 600; font-size: 15px;color: black'>E-mail: </span> <span style='font-size: 15px;'> {$email} </span> 
    </body>
    
    </html>";
    if($mail->send()){
        http_response_code(200);    // ОК
    } else{
        http_response_code(500);    // Ошибка на сервере
        echo "Ошибка отправления почты: {$mail->ErrorInfo}";
    }
?>

