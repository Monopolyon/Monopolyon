<?php
include ("DB_Connection.php");
include ("Chek_Link.php");


$passing_number = 21000.0;

$mysqli = new mysqli($host, $user, $password, $db);

if($mysqli->connect_error) {
    $answer = array("message" => 'Error connecting to database (' . $mysqli->connect_errno . ') '
    . $mysqli->connect_error);        
    return json_encode($answer);        
                
};

$mysqli->query("SET NAMES 'utf8'"); 

$answer = array();

$res_data = $mysqli->query("SELECT * FROM `New_User_Data`ORDER BY `balance` ASC");

$temp = $res_data->fetch_array();

$adresses = explode("\r\n\r\n", $temp[0]);
array_pop($adresses);

$balances = explode("\r\n\r\n", $temp[1]);
array_pop($balances);

$emales = explode("\r\n\r\n", $temp[2]);
array_pop($emales);

$names = explode("\r\n\r\n", $temp[3]);
array_pop($names);

$links = explode("\r\n\r\n", $temp[5]);
array_pop($links);

$mottos = explode("\r\n\r\n", $temp[4]);
array_pop($mottos);

$logos = explode("\r\n\r\n", $temp[6]);
array_pop($logos);

$colors = explode("\r\n\r\n", $temp[7]);
array_pop($colors);

$flexes = explode("\r\n\r\n", $temp[8]);
array_pop($flexes);

$count = count($adresses);
$answer["count"] = $count;

$answer['wallets'] = $adresses;
$answer['balances'] = $balances;
$answer['emales'] = $emales;
$answer['names'] = $names;
$answer['links'] = $links;
$answer['mottos'] = $mottos;
$answer['logos'] = $logos;
$answer['colors'] = $colors;
$answer['flexes'] = $flexes;




echo json_encode($answer);
exit;


if($count > 0){            
    
};

if($res_data->num_rows == 0){
    $db_message = "no records found";
    $message_to_user = "null";
    $log_info = $mysqli->query("INSERT INTO `Log_Information` (`status`,`user_action`,`page`,`message`,`message_to_user`,`ip`,`time`) VALUES ('error','try load main window data', 'Load_MW.php','$db_message','$message_to_user','$ip','$time')");
    $mysqli->close();
    $answer["message"] = $message_to_user;
    echo json_encode($answer);
    exit;
};


?>