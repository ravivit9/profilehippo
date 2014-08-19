<?php
require_once('config.php');


#000.186.239.3:3306 -- GoDaddy host
#mysql_connect("localhost","profilehippo","\$sysDate1") or die(mysql_error());
#mysql_select_db("devschema") or die(mysql_error());

#mysqli_connect("localhost","root","\$sysDate1", "devschema") or die(mysql_error());
#mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\$sysDate1", "devschema") or die(mysql_error());


#$link = mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\$sysDate1", "devschema") or die(mysqli_error());
#$link = mysqli_connect("localhost","root","\$sysDate1","devschema") or die("Error " . mysqli_error($link)); 
#$data  = "SELECT * FROM members" or die("Error in the consult.." . mysqli_error($link)); 

$data = json_decode(file_get_contents("php://input"));

if(isset($data->email))
$uemail = mysqli_real_escape_string($link, $data->email);

if(isset($data->pwd))
$pwd = mysqli_real_escape_string($link, $data->pwd);


$pwd = mysqli_real_escape_string($link, $data->pwd);
$uemail = mysqli_real_escape_string($link, $data->email);

#$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
#$saltedPW =  $escapedPW . $salt;
#$saltedPW =  $pwd . $salt ;
#$hashedPW = hash('sha256', $saltedPW);
$hashedPW = hash('sha256', $pwd);
 
#$qry_em = 'select count(*) as cnt from members where mem_email_id ="' . $uemail . '"' . ' and mem_password="' . $hashedPW . '"' ;
#$qry_res = mysqli_query($qry_em);
#$res = mysqli_fetch_assoc($qry_res);



/* Select queries return a resultset */
$qry_res = '';
$qry_res = $link->query('select * from members where mem_email_id ="' . $uemail . '"' . ' and mem_password="' . $hashedPW . '"' );
$res= $qry_res->num_rows;
 
   
    
 
# generate a random salt to use for this account
#$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
#$saltedPW =  $escapedPW . $salt;
#$hashedPW = hash('sha256', $saltedPW);
 
#if ($res['cnt'] == 0) {
if ($res==0) {
    
    $arr = array('msg' => "", 'error' => 'Invalid user or password. Please check the email id / password.');
    $jsn = json_encode($arr);
    print_r($jsn);
}else {
    #$qry = 'INSERT INTO members (mem_first_name, mem_last_name, mem_password, mem_email_id)values ("' . $usrfname . '","' . $usrlname . '","' . $pwd . '","' . $uemail . '")';
    #$qry_res = mysqli_query($qry);

    if ($qry_res) {
        $arr = array('msg' => "User Successfully Logged In!!!", 'Success' => '', 'url' => 'app/php/categories.php');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
}
?>