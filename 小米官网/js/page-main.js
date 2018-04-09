/**
 * Created by sunweixin on 2018/4/9.
 */
$(function(){
   $('.page-main .span16  img').on('mouseover',function(){
       $('.page-main .popups').css('display','block');
       $('.page-main .popups').height('80px');
       console.log($(this));
   });
    $('.page-main .span16  img').on('mouseleave',function(){
        $('.page-main .popups').height('0');
        $('.page-main .popups').css('display','none');
    });
});