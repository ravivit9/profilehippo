<?php
#$env = file_get_contents('/app/env.txt', FILE_USE_INCLUDE_PATH);
$file_path = dirname(dirname(__FILE__)) . '/env.txt';
$env = file_get_contents( $file_path,  FILE_USE_INCLUDE_PATH);



if ($env == 'DEVELOPMENT') {
    #mysql_connect("localhost","profilehippo","\testpassword") or die(mysql_error());
    #mysql_select_db("devschema") or die(mysql_error());
    $link = mysqli_connect("localhost","root","\testpassword","devschema") or die("Error " . mysqli_error($link));
}else {
    #mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\testpassword") or die(mysql_error());
    #mysql_select_db("devschema") or die(mysql_error());
    $link = mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\testpassword", "devschema") or die(mysqli_error());

}
?>