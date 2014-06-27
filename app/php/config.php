<?php
$env = file_get_contents('../env.txt', FILE_USE_INCLUDE_PATH);
if ($env == 'DEVELOPMENT') {
    mysql_connect("localhost","profilehippo","\$sysDate1") or die(mysql_error());
    mysql_select_db("devschema") or die(mysql_error());
}else {
    mysql_connect("www.rbkconsultancy.co.uk","profilehippo","\$sysDate1") or die(mysql_error());
    mysql_select_db("devschema") or die(mysql_error());
}
?>