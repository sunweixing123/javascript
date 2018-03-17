<?php
    $info=array(
        'user'=>array(
            array(1,'zhangsan',19,'male'),
            array(2,'lisi',29,'male'),
            array(3,'wangwu',35,'female'),
        ),
        'score'=>array(
            array(1,100,99,9),
            array(2,45,78,90),
            array(3,45,90,87),
        ),
        'connect'=>array(
            array(1,110,'aa@bb.com'),
            array(2,220,'ff@ee.com'),
            array(3,330,'uu@rr.com'),
        ),
    );


foreach($info as $key=>$value){
echo "<table width=500 align='center' border='1'>";
echo "<caption><h3>$key</h3></caption>";

            foreach($value as $row){
            echo "<tr>";


            foreach($row as $col){
                echo "<td>";
                echo $col;
                echo "</td>";
            }
            echo "</tr>";

          }

echo "<table>";
}

?>