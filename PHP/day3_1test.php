<?php
if(isset($_POST['sub'])){
$uname=$_POST['text'];
$password=$_POST['pass'];
if($uname=="sunweixing"&&$password=="12345"){
 if(!empty($_COOKIE['lastvisit'])){//先判断，是否存在cookie
        echo "您上次访问时间是：".$_COOKIE['lastvisit'];
        setCookie("lastvisit",date("Y-m-d H:i:s"),time()+3600*24*360);
    }else{
        echo "您是第一次登录，欢迎！";
        setCookie("lastvisit",date("Y-m-d H:i:s"),time()+3600*24*360);
    }
}else{
echo "<script>alert('账号或密码错误')</script>";

}




}



?>
<form action="day3_1test.php" method="post">
                     Email:<input type="text" name="text"><br/>
                     密码:<input type="password" name="pass"><br/>
                     <input type="submit" name="sub" value="登录">

                     </form>