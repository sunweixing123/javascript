<?php
echo date_default_timezone_set('Asia/Shanghai')."<br>"; //设置中国时区
echo date('Y-m-d H:i:s')."<br>";//中国标准时间
$arr=array(
    array('软件版本',$_SERVER['PHP_SELF']),
    array('端口',$_SERVER['REMOTE_PORT']),
    array('服务名',$_SERVER['SERVER_NAME']),
    array('文档路径',$_SERVER['DOCUMENT_ROOT']),
    array('文件路径',$_SERVER['SCRIPT_FILENAME']),
    array('运行时间',date('Y-m-d H:i:s')),
);



echo "<table width=800 align='center' border='1'>";


foreach($arr as $key=>$value){
            echo "<tr>";
            foreach($value as $key=>$value){
            echo "<td>";
                echo $value;


            echo "</td>";

          }
          echo "<tr/>";
                            echo "<br />";


}
echo "<table>";
?>