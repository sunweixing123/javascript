<?php
echo "<table width=800 align='center' border='1'>";
for($i=1;$i<10;$i++){
 echo "<tr>";
    for($j=1;$j<$i+1;$j++){
        echo "<td>";
        echo $i ."*" .$j."=";
        echo $i*$j;
        echo "</td>";
    }
    echo "</tr>";
    echo "</br>";
  }
  echo "</table>";

?>