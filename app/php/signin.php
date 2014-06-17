<?php
#000.186.239.3:3306 -- GoDaddy host
mysql_connect("localhost","profilehippo","\$sysDate1") or die(mysql_error());
mysql_select_db("devschema") or die(mysql_error());

$data = mysql_query("SELECT * FROM members") or die(mysql_error());
 
$data = json_decode(file_get_contents("php://input"));

if(isset($data->email))
$uemail = mysql_real_escape_string($data->email);

if(isset($data->pwd))
$pwd = mysql_real_escape_string($data->pwd);


$pwd = mysql_real_escape_string($data->pwd);
$uemail = mysql_real_escape_string($data->email);

#$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
#$saltedPW =  $escapedPW . $salt;
#$saltedPW =  $pwd . $salt ;
#$hashedPW = hash('sha256', $saltedPW);
$hashedPW = hash('sha256', $pwd);
 
$qry_em = 'select count(*) as cnt from members where mem_email_id ="' . $uemail . '"' . ' and mem_password="' . $hashedPW . '"' ;
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);
 
# generate a random salt to use for this account
#$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
#$saltedPW =  $escapedPW . $salt;
#$hashedPW = hash('sha256', $saltedPW);
 
if ($res['cnt'] == 0) {
    $arr = array('msg' => "", 'error' => 'Invalid user or password. Please check the email id / password.' . $hashedPW);
    $jsn = json_encode($arr);
    print_r($jsn);
}else {
    #$qry = 'INSERT INTO members (mem_first_name, mem_last_name, mem_password, mem_email_id)values ("' . $usrfname . '","' . $usrlname . '","' . $pwd . '","' . $uemail . '")';
    #$qry_res = mysql_query($qry);

    #if ($qry_res) {
        $arr = array('msg' => "User Successfully Logged In!!!", 'Success' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    #}
}
?>