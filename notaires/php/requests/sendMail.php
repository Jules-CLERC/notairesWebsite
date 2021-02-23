<?php
$genderGet = $_GET['gender'];
$nameGet = $_GET['name'];
$firstNameGet = $_GET['firstName'];
$mailGet = $_GET['mail'];
$telGet = $_GET['tel'];
$categoryGet = $_GET['category'];
$moreInfosGet = $_GET['moreInfos'];
$prefGet = $_GET['pref'];

if (strlen($moreInfosGet) == 0) {
    $moreInfosGet = 'Aucune information supplémentaire fournie.';
}
else {
    $moreInfosGet = 'Informations supplémentaires fournies : '."\n".$moreInfosGet;
}

$to = "clerc.mougins@notaires.fr";

$subject = 'Demande de '.$genderGet.' '.$firstNameGet.' '.$nameGet.'depuis le site web';

$message = 'Nouveau message à partir du site web :'."\n"."\n"
    .$genderGet.' '.$firstNameGet.' '.$nameGet.' souhaite contacter l\'office concernant le thème : '.$categoryGet.' .'."\n"."\n".
    $moreInfosGet."\n"."\n"
    .'Informations pour recontacter la personne: '."\n"."\n".
    'Adresse mail : '.$mailGet."\n".
    'Numéro de téléphone : '.$telGet."\n"."\n".
    'La personne souhaite de préférence être rappelé : '."\n".$prefGet;

$return = mail($to, $subject, $message);
echo $return;
