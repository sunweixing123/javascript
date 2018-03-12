<?php
$arr['2-11']="外地出差";
$arr['3-5']="上课";
$arr['2-12']="旅游";
if(isset($_POST['sub'])){
    $date=$_POST['date'];
    $flag=false;
    $key="";
    foreach($arr as $k=>$v){
                                if($k==$date){
                                    $flag=true;
                                    $key=$k;
                                }
                            }

                            if($flag==true){
                                $value=$arr[$key];
                                echo "<script>alert('$value')</script>";
}
}
?>

<meta charset="utf-8">
<form action="day2_2test.php" method="post">
<h1>查询当前日程<h1>
输入查询日期：<input type="text" name="date"> <br />
<input type="submit" value="查询" name="sub">
<input type="submit" value="重置" name="clear">
</form>