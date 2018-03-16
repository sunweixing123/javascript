<?php
if(isset($_POST['sub'])){
    $file=$_FILES['file'];
    $urlname=$file['name'];
    echo "<div>";
    $arr=explode('.',$urlname);
       $num=count($arr)-1;

    echo "文件名称：".$urlname;
     echo "文件类型为".$arr[$num];

    echo "</div>";

}






?>
<meta charset="utf-8">
<form action="day2_10test.php" method="post" enctype="multipart/form-data">
选择文件：<input type="file" name="file">
<br/>
<input type="submit" name="sub" value="提交">

</form>