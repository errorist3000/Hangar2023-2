<?php

function cleanPost($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);

    return $value;
}

function mailQuiz($name, $email, $phone, $description) {
    //$to = 'oneliner@vivaldi.net, post@angarpro.com';
    $to = 'oneliner@vivaldi.net';
    $subject = 'Контактная форма. Имя: '.$name.'. АngarPro.com.';
    $message = '
    <html lang="ru">
    <head>
    <title>'.$subject.'</title>
    </head>
    <body>
    <p>Имя: '.$name.'</p>
    <p>Почта: '.$email.'</p>
    <p>Телефон: '.$phone.'</p>
    <p>-----</p>
    <p>Доп. информация: '.$$description'<p>
    </body>
    </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: angarpro.com\r\n";

    mail($to, $subject, $message, $headers);
}

function telegramQuiz($name, $email, $phone, $description) {
    $nameF = "Имя: ";
    $emailF = "Почта: ";
    $phoneF = "Телефон: ";
    $descriptionF = "Дополнительно: ";

    $arr = array(
        $nameF => $name,
        $emailF => $email,
        $phoneF => $phone,
        $descriptionF=> $description
    );

    foreach($arr as $key => $value) {
        $txt="";
        $txt .= "<b>" . $key . "</b> " . $value . "%0A";
    }

    $token = "1094014637:AAGDcDmU8ggmpYiG14yjZAZy3sqMKQykZe0";
    $chat_id = "-439440818";
    fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
}

$dataPost = file_get_contents('php://input');
$data = json_decode($dataPost, true);

$name = cleanPost($data['name']);
$email = cleanPost($data['email']);
$phone = cleanPost($data['phone']);
$description = cleanPost($data['description']);

if( !empty($name) && !empty($email)) {
    mailQuiz($name, $email, $phone, $description);
    telegramQuiz($name, $email, $phone, $description);
}
