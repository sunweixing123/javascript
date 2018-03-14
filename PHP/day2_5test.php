<?php
    $arr_all=array();
    for($i=1;$i<6;$i++){
        echo "第".$i."注:";
        $arr_all[$i]=array();
        for($j=0;$j<7;$j++){
            $random=mt_rand(1,30);
            if(in_array($random,$arr_all[$i])){
                $j--;
                continue;
            }else{
            $arr_all[$i][$j]=$random;
            echo $arr_all[$i][$j]."&nbsp";
            }
        }

        echo "<br />";
    }






?>
