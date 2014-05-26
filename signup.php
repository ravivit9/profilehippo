<?php
 
$data = json_decode(file_get_contents("php://input"));
$usrname = mysql_real_escape_string($data->uname);
$upswd = mysql_real_escape_string($data->pswd);
$uemail = mysql_real_escape_string($data->email);


$con = mysql_connect("localhost","admin","\$sysDate1","devdb") or die('Could not connect');
mysql_select_db('devschema', $con) or die('');
 
$qry_em = 'select count(*) as cnt from login_master_t where lm_login_email ="' . $uemail . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);
 
if ($res['cnt'] == 0) {
    $qry = 'INSERT INTO login_master_t (lm_fname, lm_login_pass, lm_login_email) values ("' . $usrname . '","' . $upswd . '","' . $uemail . '")';
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
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
?>