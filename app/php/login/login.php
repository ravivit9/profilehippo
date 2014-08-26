<?php
#require_once('/app/php/config.php');
require_once(dirname(dirname(__FILE__)) . '/config.php'); 


#000.186.239.3:3306 -- GoDaddy host
#mysql_connect("localhost","profilehippo","\$sysDate1") or die(mysql_error());
#mysql_select_db("devschema") or die(mysql_error());

#mysqli_connect("localhost","root","\$sysDate1", "devschema") or die(mysql_error());
#mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\$sysDate1", "devschema") or die(mysql_error());


#$link = mysqli_connect("www.rbkconsultancy.co.uk","profilehippo","\$sysDate1", "devschema") or die(mysqli_error());
#$link = mysqli_connect("localhost","root","\$sysDate1","devschema") or die("Error " . mysqli_error($link)); 
#$data  = "SELECT * FROM members" or die("Error in the consult.." . mysqli_error($link)); 

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username))
$username = mysqli_real_escape_string($link, $data->username);

if(isset($data->password))
$password = mysqli_real_escape_string($link, $data->password);


$password = mysqli_real_escape_string($link, $data->password);
$username = mysqli_real_escape_string($link, $data->username);

#$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
#$saltedPW =  $escapedPW . $salt;
#$saltedPW =  $password . $salt ;
#$hashedPW = hash('sha256', $saltedPW);
$hashedPW = hash('sha256', $password);
 
#$qry_em = 'select count(*) as cnt from members where mem_email_id ="' . $username . '"' . ' and mem_password="' . $hashedPW . '"' ;
#$qry_res = mysqli_query($qry_em);
#$res = mysqli_fetch_assoc($qry_res);



/* Select queries return a resultset */
#$qry_res = '';
#$qry_res = $link->query('select * from members where mem_email_id ="' . $username . '"' . ' and mem_password="' . $hashedPW . '"' );
#$res= $qry_res->num_rows;
 

$query = 'select * from members where mem_email_id ="' . $username . '"' . ' and mem_password="' . $hashedPW . '"';
if ($result = $link->query($query)) {
    /* fetch associative array */
    $rec_count=0;
    while ($row = $result->fetch_assoc()) {
        #printf ("%s (%s)\n", $row["Name"], $row["CountryCode"]);
        $rec_count++;
        $arr = array(
            "id" => $row["mem_email_id"],
            "user" => array(
                "status" => 200,
                 "id" => $row["mem_email_id"],
                 "name" => $row["mem_display_name"],
                 "role" => $row["mem_type"]
            )
        );    

    }

    /* free result set */
    $result->free();
}

/* close connection */
$link->close();
   
    
 
# generate a random salt to use for this account
#$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
#$saltedPW =  $escapedPW . $salt;
#$hashedPW = hash('sha256', $saltedPW);
 
#if ($res['cnt'] == 0) {
if ($rec_count==0) {
    #$arr = array('msg' => "", 'error' => 'Invalid user or password. Please check the email id / password.');
    $arr = array(
        "id" => "",
        "user" => array(
            "status" => 401,
             "id" => "",
             "name" => "",
             "role" => ""
        )
    );    
    // Get the current default response code
    //var_dump(http_response_code()); // int(200)
    // Set our response code
    //http_response_code(401); // notAuthenticated
    //$res = var_dump(http_response_code());

    $jsn = json_encode($arr);
    print_r($jsn);
}else {
    #$qry = 'INSERT INTO members (mem_first_name, mem_last_name, mem_password, mem_email_id)values ("' . $usrfname . '","' . $usrlname . '","' . $password . '","' . $username . '")';
    #$qry_res = mysqli_query($qry);

    #if ($qry_res) {
        #$arr = array('msg' => "User Successfully Logged In!!!", 'Success' => '', 'url' => 'app/php/categories.php');
        #$arr = array('id' => $username, 'user.id' => $username, 'user.role' => 'admin');
        #$arr = array($username, $username, 'admin');
        /*
        $arr = array(
            "id" => "XXX_123_XXX",
            "user" => array(
                "status" => 200,
                "id" => $username,
                "name" => "Test user",
                "role" => "admin"
            )
        );
        */
        $jsn = json_encode($arr);
        print_r($jsn);
    #}
}
?>