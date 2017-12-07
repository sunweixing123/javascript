/**
 * Created by sunweixin on 2017/12/6.
 */
requirejs.config({
    paths : {
        jquery:"jqyery-3.2.1"
    }
});
define(["jquery"],function($){
    // function Dialog(){
    //     // this.defaultSettings={
    //     //     width:500,
    //     //     height:400
    //     // };
    //     this.$banner=$("<div class='banner'></div>");
    // }

    // Dialog.prototype.open=function(){
    //     this.$banner.appendTo(document.body);
    // };
    // // Dialog.prototype.open=function(settings){
    // //     $.extend(this.defaultSettings,settings);
    // //     this.$banner.appendTo(document.body);
    // // };
    // return Dialog;


    return {
        open : function(){
            var html="<div class='banner'></div>";
            $(document.body).append(html);
        }
    }
});
