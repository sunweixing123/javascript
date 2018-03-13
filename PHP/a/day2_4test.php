<?php
if(isset($_POST['sub'])){
    $content=$_POST['content'];
    $title=$_POST['title'];
    $date=$_POST['date'];
    echo $content.$title.$date;
}




?>
<form action="day2_4test.php" method="post">
<span>新闻内容</span><input type="text" name="content"><br />
<span>新闻标题</span><input type="text" name="title"><br />
<span>新闻日期</span><input type="text" name="date"><br />
<input type="submit" value="提交" name="sub">

</form>