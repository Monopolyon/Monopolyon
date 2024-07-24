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

$res_data = $mysqli->query("SELECT * FROM `User_Data`ORDER BY `balance` ASC");

$count = $res_data->num_rows;
$answer["count"] = $count;


if($count > 0){


    for ($i = 0; $i < $count; $i++) {

        $data_ftc[$i] = $res_data->fetch_array();
        
        $temp_arr = array();
        $temp_arr['wallet'] = $data_ftc[$i]['wallet'];
        $temp_arr['balance'] = $data_ftc[$i]['balance'];
        $temp_arr['email'] = $data_ftc[$i]['email'];
        $temp_arr['name'] = $data_ftc[$i]['name'];
        $temp_arr['motto'] = $data_ftc[$i]['motto'];
        $temp_arr['link'] = $data_ftc[$i]['link'];
        $temp_arr['color'] = $data_ftc[$i]['color'];
        $temp_arr['flex'] = $data_ftc[$i]['flex'];                        

        $res_url = false;

        if($data_ftc[$i]['logo']!= ""){
            $res_url = does_url_exists($data_ftc[$i]['logo']);            
        };


        if($res_url){
            $temp_arr['logo'] = $data_ftc[$i]['logo'];
        };
        if(!$res_url){
            $temp_arr['logo'] = "No IMG";
        };
        
        
        array_push($answer,$temp_arr);  
                             
    };
    
    echo json_encode($answer);
    exit;

    
    
    
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