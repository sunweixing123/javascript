<?php
$arr=array('2012 MacBook Pro','2009 iMac','2011 MacBook Air','2007 iPad1'
);
foreach($arr as $k=>$v){
    echo $v;
    echo "<br />";
    };


if(isset($_POST['sub'])){
   sort($arr);
   foreach($arr as $k=>$v){
       echo $v;
       echo "<br />";
       }
   }
   if(isset($_POST['change'])){
   rsort($arr);
   foreach($arr as $k=>$v){
       echo $v;
       echo "<br />";
       }
   }


?>
<form action="day2_7test.php" method="post">
<input type="submit" value="正序" name="sub">
<input type="submit" value="反序" name="change">

</form>