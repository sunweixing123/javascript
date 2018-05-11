/**
 * Created by sunweixin on 2017/12/12.
 */

var $wapper=$(".wrapper-1");
var $prev1=$('.sixth .prev1');
var $next1=$('.sixth .next1');
var $ul=$('.sixth .ul1');
$next1.on('click',function(){
        $ul.stop().animate(
            {
                    left:0
            }
        )
});
$prev1.on('click',function(){
   $ul.stop().animate(
       {
               left:-1246+'px'
       }
   )
});



