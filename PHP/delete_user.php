<?php
$con = mysql_connect("localhost","root","");
mysql_set_charset('utf8', $con);
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("test", $con);
$user_id = $_GET['user_id'];
$sql = "DELETE FROM t_user WHERE user_id=$user_id";
if(mysql_query($sql)){
    header('location: success.php');
}else{
    echo '删除失败';
}

// some code
mysql_close($con);