<?php
$arr_all=array(
array('排名','号码','国籍','姓名','生日','跑道','成绩'),
array(1,'3236','阿里斯梅里特','美国','1985','5','12.92'),
array(2,'3246','杰森理查森','美国','1986','4','13.04'),
array(3,'2182','汉斯勒','牙买加','1990','7','13.12'),
array(4,'1804','劳伦斯','英国','1992','2','13.24'),
array(5,'1125','瑞恩','巴巴多斯','1994','8','13.56'),
array(6,'1477','奥兰多','古巴','1991','9','13.68'),
  );
  $color=null;
echo "<table width=500 align='center' border='1' style='background-color:#c0c0c0'>";

foreach($arr_all as $k=>$v){
if(strcmp($v[0],1)==0){
$color="red";
}else{
 $color="#c0c0c0";
 }
if(strcmp($v[0],2)==0){
$color="green";
}
if(strcmp($v[0],3)==0){
$color="blue";
}
echo "<tr bgColor=$color>";

foreach($v as $k=>$i){
echo "<td>";
echo $i;
echo "</td>";
};

echo "</tr>";
};

echo "</table>";
?>