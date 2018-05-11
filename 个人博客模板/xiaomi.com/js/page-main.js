/**
 * Created by sunweixin on 2018/4/9.
 */
$(function(){
   $('.page-main .span16 .brick-items').on('mouseover',function(){

       // $('.page-main .popups').css('display','block');
       // $('.page-main .popups').height('80px');
       $(this).find('.popups').css('display','block');
       $(this).find('.popups').height('80px');
   });
    $('.page-main .span16 .brick-items').on('mouseleave',function(){
        $('.page-main .popups').height('0');
        $('.page-main .popups').css('display','none');
    });
});