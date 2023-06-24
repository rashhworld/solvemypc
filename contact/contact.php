<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

$name = $_POST["userName"];
$phone = $_POST["userPhone"];
$message = $_POST["userMessage"];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.in';
    $mail->SMTPAuth = true;
    $mail->Username = '';
    $mail->Password = '';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('info@solvemypc.in', 'solvemypc.in');
    $mail->addAddress('solvemypc4@gmail.com', 'solvemypc');

    $mail->isHTML(true);
    $mail->Subject = 'Message from solvemypc.in';
    $mail->Body = "Below are the contact details of the user..<br><br>Name: $name<br>Phone: $phone<br>Message: $message";

    $mail->send();

    $res = [
        "status" => 1,
        "message" => "Message sent successfully. We will contact you soon."
    ];
} catch (Exception $e) {
    $res = [
        "status" => 0,
        "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
    ];
}

header('Content-Type: application/json');
echo json_encode($res);
