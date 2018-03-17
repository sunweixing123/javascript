<?php
if(isset($_POST['sub'])){
$text1=$_POST['text1'];
$text2=$_POST['text2'];
$text3=$_POST['text3'];


if(strcmp($text1,$text2)==0||strcmp($text1,$text3)==0||strcmp($text3,$text2)==0){
echo "<script>alert('error')</script>";

}else{
echo "<script>alert('success')</script>";
}

}





?>
<meta charset="utf-8">
<form action="day2_11test.php" method="post">
<h1>请输入三位不同员工的姓名</h1>
分组姓名1：<input type="text" name="text1"><br/>
分组姓名2：<input type="text" name="text2"><br/>
分组姓名3：<input type="text" name="text3"><br/>
<input type="submit" name="sub" value="提交">
</form>