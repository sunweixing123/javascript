/**
 * Created by sunweixin on 2018/1/17.
 */
$(function(){
    $('#nav').on('click',function(){
        $('#hidden').css('z-index','9');
        $('#hidden').animate({opacity:0.4},500);
        $('#menu').css('z-index','10');
        $('#menu').animate({width:270},500);
        $('#menu ul').css('display','block');
    });


    $('#hidden').on('click',function(){
        $('#hidden').animate({opacity:0},800);
        setTimeout(function(){
            $('#hidden').css('z-index','-999');
        },800);
        $('#menu').animate({width:0},500);
        $('#menu ul').css('display','none')
    });
    var a=1;
    $('#menu .second .one').on('click' , function(){
        if(a){
            $('#menu').css('overflow','scroll');
            $('#menu .second .one').animate({height:270},500);
        }else{
            $('#menu').css('overflow','none');
            $('#menu .second .one').animate({height:47},500);
        }
        a=!a;
    })
});
