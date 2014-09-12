<?php
require_once(dirname(dirname(__FILE__)) . '/config.php');

#$con=mysql_connect("localhost","profilehippo","\testpassword") or die('Could not connect');
#mysql_select_db("devschema", $con) or die('');
#$result = mysql_query("SELECT * from actor") or die('Could not query');


#$con = mysql_connect("localhost","admin","\testpassword","devdb");
#mysql_select_db('devschema', $con) or die('');

#000.186.239.3:3306 -- GoDaddy host
#mysql_connect("localhost","profilehippo","\testpassword") or die(mysql_error());
#mysql_connect("www.rbkconsultancy.co.uk","profilehippo","sysDate1") or die(mysql_error());
#mysql_select_db("devschema") or die(mysql_error());
#$data = mysql_query("SELECT * FROM members") or die(mysql_error());

$usrfname=$usrlname=$usrdname=$uemail=$pwd=$hashedPW='';

$data = json_decode(file_get_contents("php://input"));
#$usrname = mysql_real_escape_string($data->uname);
#$upswd = mysql_real_escape_string($data->pswd);
#$uemail = mysql_real_escape_string($data->email);

if(isset($data->firstname))
$usrfname = mysqli_real_escape_string($link, $data->firstname);

if(isset($data->lastname))
$usrlname = mysqli_real_escape_string($link, $data->lastname);

if(isset($data->displayname))
$usrdname = mysqli_real_escape_string($link, $data->displayname);

if(isset($data->username))
$uemail = mysqli_real_escape_string($link, $data->username);

if(isset($data->password))
$pwd = mysqli_real_escape_string($link, $data->password);

#$udispname = mysql_real_escape_string($data->udispname);
#$pwd = mysql_real_escape_string($data->pwd);
#$uemail = mysql_real_escape_string($data->email);


#$qry_em = 'select count(*) as cnt from members where mem_email_id ="' . $uemail . '"';
#$qry_res = mysqli_query($qry_em);
#$res = mysqli_fetch_assoc($qry_res);

$qry_res = '';
$qry_res = $link->query('select COUNT(*) AS cnt from members where mem_email_id ="' . $uemail . '"' );
$res= $qry_res->num_rows;


# generate a random salt to use for this account
#$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
#$saltedPW =  $escapedPW . $salt;
#$saltedPW =  $pwd . $salt;
$hashedPW = hash('sha256', $pwd);

if ($res['cnt'] == 0) {
    #$qry = 'INSERT INTO login_master_t (lm_fname, lm_login_pwd, lm_login_email) values ("' . $usrname . '","' . $upswd . '","' . $uemail . '")';
    $qry = 'INSERT INTO members (mem_first_name, mem_last_name, mem_display_name, mem_password, mem_email_id)values ("' . $usrfname . '","' . $usrlname . '","' . $usrdname . '","' . $hashedPW . '","' . $uemail . '")';
    #mysqli_query($link, $qry);
    #$qry_res = mysqli_insert_id($link);

    if ($result = $link->query($qry)) {
        $qry_res  = $link->insert_id;
        $arr = array('msg' => "User Created Successfully!!!", 'redirect' => 'login');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
} else {
    $arr = array('msg' => "", 'error' => 'User Already exists with same email');
    $jsn = json_encode($arr);
    print_r($jsn);
}
mysqli_close($link);
?>