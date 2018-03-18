<?php
if(isset($_POST['sub'])){
$uid = $_SESSION[uid] = $info[id];
$session_id = $_SESSION[session_id] = session_id();
$login_time = time();
$logout_time = time()*600;
$sql = "INSERT INTO member_login (uid,session_id,login_time,logout_time) values($uid,$session_id,$login_time,$logout_time)";
mysql_query($sql);

$username=$_POST['text'];
$password=$_POST['pass'];
if($username=="sunweixng"&&$password=="12345"){
    echo "<script>alert('登陆成功')</script>";
    if($_SESSION[uid]){
    $uid = $_SESSION[uid];
    $session_id = $_SESSION[session_id];
    $logout_time = time()*600;
    $sql = "UPDATE member_login SET logout_time=$logout_time WHERE uid=$uid AND session_id=$session_id";
    mysql_query($sql);
    }

}else{
echo "<script>alert('用户名或密码错误')</script>";

}

}


?>
<form action="day3_2test.php" method="post">
Email:<input type="text" name="text"><br/>
密码:<input type="password" name="pass"><br/>
<input type="submit" name="sub" value="登录">

</form>