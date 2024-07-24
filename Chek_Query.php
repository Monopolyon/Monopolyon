<?php

include_once("Chek_Link.php");

$url = htmlspecialchars($_POST['link']);


$result = does_url_exists($url);

$answer = array();

if($result){
    $answer['result'] = $url;
};
if(!$result || $result == '' || strlen($result) == 0){
    $answer['result'] = 'No IMG';
};

echo json_encode($answer);



