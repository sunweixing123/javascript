<?php
$username = $_POST['username'];
$pwd = $_POST['pwd'];
$realname = $_POST['realname'];
$tel = $_POST['tel'];
$con = mysql_connect("localhost","root","");
mysql_set_charset('utf8', $con);
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("test", $con);

if(mysql_query("INSERT INTO t_user(username, password, realname, tel) VALUES('".$username."', '".$pwd."', '".$realname."', '".$tel."')")){
    header('location: success.php');
}else{
    echo '插入失败';
}

// some code
mysql_close($con);

?>