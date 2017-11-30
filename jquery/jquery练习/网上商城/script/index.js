/**
 * Created by sunweixin on 2017/11/26.
 */
$(function() {
    // 搜索框
    $("#inputSearch").on("focus", function () {
        if (this.value === this.defaultValue) {
            this.value = "";
        }
    }).on("blur", function () {
        if (this.value === "") {
            this.value = this.defaultValue;
        }
    });
    // 导航菜单
    $("#nav li").hover(function () {
        $(this).children(".jnNav").show();
    }, function () {
        $(this).children(".jnNav").hide();
    });
    // hot
    $("#jnCatalog .promoted").append("<span class='hot'></span>");

// 淡入淡出
//     调整层级关系
//     var $imgs = $('#JS_imgWrap img');
//      $imgs.each(function (index, elem) {
//          $(elem).css('zIndex', function () {
//              return $imgs.length - index;
//          });
//      });
        var $imgs=$('#JS_imgWrap img');
        $imgs.each(function(index,elem){
            $(elem).css('zIndex',function(){
                return $imgs.length - index;
            });
    });

    // var $imgs=$('#Js_imgWrap img');
    // $imgs.each(function(index,elem){
    //     $(elem).css('zIndex',function(){
    //        return $imgs.length - index;
    //     });
    // });
    $('#jnImageroll>div').css('zIndex',$imgs.length);
    $('#jnImageroll a').on('mouseover',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        $imgs.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
    });
    tooltip('#jnNoticeInfo a');
    tooltip('#jnCatalog a');


//     var $imgs = $('#JS_imgWrap img');
//     $imgs.each(function (index, elem) {
//         $(elem).css('zIndex', function () {
//             return $imgs.length - index;
//         });
//     });
//
//     $('#jnImageroll > div').css('zIndex', $imgs.length);
//     $('#jnImageroll a').on('mouseover', function () {
//         $(this).addClass('chos').siblings().removeClass('chos');
//         $imgs.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
//     });
//
//     // tooltip
//     tooltip("#jnNoticeInfo a");
//     tooltip("#jnCatalog a");
    var $jr=$("#jnBrandList");
    $("#jnBrandTab li").on("click",function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $jr.stop().animate({
            left:-$("li",$jr).eq(0).innerWidth()*4*$(this).index()
        })

    });


    // var $jnBrandList = $('#jnBrandList');
    // $('#jnBrandTab li').on('click', function(){
    //     $(this).addClass('chos').siblings().removeClass('chos');
    //     $jnBrandList.stop().animate({
    //         left: -$('li', $jnBrandList).eq(0).innerWidth() * 4 * $(this).index()
    //     })
    // });
});