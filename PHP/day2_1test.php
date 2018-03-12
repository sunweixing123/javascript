<?php
if(isset($_POST['sub'])){
    $file=$_FILES['file'];
    $urlname=$file['name'];
    $arr=explode('.',$urlname);
    $num=count($arr)-1;
    echo "文件后缀为".$arr[$num];

}

?>
<meta charset="utf-8">
<form action="day2_1test.php" method="post" enctype="multipart/form-data">
<h1>检测文件后缀名</h1>
上传文件：<input type="file" name="file">
<br />
<input type="submit" name="sub" value="检测">

</form>