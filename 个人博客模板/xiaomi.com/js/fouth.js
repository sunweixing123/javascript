// js实现无缝滚动
// ocontainer=document.getElementById("container");
// oImgs=document.getElementById("imgs");
// otab=document.getElementById("tab");
// ali=otab.getElementsByTagName("li");
// aImg=oImgs.getElementsByTagName("img");
// var oImgWidth = aImg[0].offsetWidth;
// var oprev=document.getElementById("prev");
// var onext = document.getElementById("next");
// var inowindex=0;
// var timer;
// var $img=$("#imgs img");
// var
// oImgs.appendChild(aImg[0].cloneNode());
// oImgs.style.width=oImgWidth*5+"px";
// for(var i=0;i<ali.length; i++){
//     ali[i].index=i;
//     ali[i].onmouseover=function(){
//         inowindex=this.index;
//         changeImg();
//     };
// }
// //        左右操作
// oprev.onclick=onext.onclick=function(){
//     if(this===oprev){
//         inowindex--;
//         if(inowindex==-1){
//             inowindex=ali.length-1;
//             oImgs.style.left=-(aImg.length-1)*oImgWidth+"px";
//         }
//     }else{
//         inowindex++;
//         if(inowindex==aImg.length){
//             inowindex=1;
//             oImgs.style.left=0;
//         }
//     }
//     changeImg();
// };
// play();
// ocontainer.onmouseover=function(){
//     clearInterval(timer);
// };
// ocontainer.onmouseout=function(){
//     play();
// };
// function changeImg() {
//     for (var i = 0; i < ali.length; i++) {
//         ali[i].className = '';
//     }
//
//     ali[inowindex == ali.length ? 0 : inowindex].className = 'selected';
//                // ali.length是五
//     // 图片切换
//     animate(oImgs, {
//         left: -oImgWidth * inowindex
//     });
//     // $img.eq($(this).index).stop().fadeIn().siblings().stop().fadeOut();
// }
// function play(){
//     timer=setInterval(function(){
//         onext.onclick();
//     },1000);
// };
/**
 * Created by sunweixin on 2017/10/29.
 */
// jquery淡入淡出轮播开始
$img=$("#imgs img");
$li=$("#tab li");
var that;
var i=0;
// 自动播放
var timer=setInterval(move,2000);
// 自动开始与结束
$img.hover(function(){
    clearInterval(timer);
},function(){
    timer=setInterval(move,2000);
});
// 向左点击
$("#prev").on("click",function(){
    moveleft();
});
    function moveleft(){
    i--;
    if(i==-1){
        i=3;
    }
    $li.eq(i).addClass("selected").siblings().removeClass("selected");
    $img.eq(i).stop().fadeIn().siblings().stop().fadeOut();
}
// 向右点击
$("#next").on("click",function() {
    move();
});
    function move(){
    i++;
    if(i==4){
        i=0;
    }
    $li.eq(i).addClass("selected").siblings().removeClass("selected");
    $img.eq(i).stop().fadeIn().siblings().stop().fadeOut();
}


$li.on("click",function(){
    that=$(this);
    changeImg();
});
// 图片淡入淡出函数
function changeImg(){
    that.addClass("selected").siblings().removeClass("selected");
    $img.eq(that.index()).stop().fadeIn().siblings().stop().fadeOut();
}


// 向右弹出层开始
ofouth2221=document.getElementById("fouth-2-2-2-1");
osubnav=document.getElementById("sub-nav");
ofouth2221.onmouseover=function(){
    ofouth2221.style.background="#ff6700";
    osubnav.style.display="block";
};
ofouth2221.onmouseout=function(){
    ofouth2221.style.background="#333";
    osubnav.style.display="none";
};
osubnav.onmouseover=function(){
    osubnav.style.display="block";
};
osubnav.onmouseout=function(){
    osubnav.style.display="none";
};