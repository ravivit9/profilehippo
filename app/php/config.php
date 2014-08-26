<?php
#$env = file_get_contents('/app/env.txt', FILE_USE_INCLUDE_PATH);
$file_path = dirname(dirname(__FILE__)) . '/env.txt';
$env = file_get_contents( $file_path,  FILE_USE_INCLUDE_PATH);

 

if ($env == 'DEVELOPMENT') {
    #mysql_connect("localhost","profilehippo","\$sysDate1") or die(mysql_error());
    #mysql_select_db("devschema") or die(mysql_error());
    $link = mysqli_connect("localhost","root","\$sysDate1","devschema") or die("Error " . mysqli_error($link)); 
}else {
    #mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\$sysDate1") or die(mysql_error());
    #mysql_select_db("devschema") or die(mysql_error());
    $link = mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\$sysDate1", "devschema") or die(mysqli_error());

}
?>