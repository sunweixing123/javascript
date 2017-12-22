/**
 * Created by sunweixin on 2017/12/6.
 */
requirejs.config({
    paths : {
        jquery:"jquery-3.2.1"
    }
});
define(["jquery"],function($){
    // function POP(){
    //     this.$div=$("<div class='banner'></div>")
    // }
    // POP.prototype.open=function(){
    //     this.$div.appendTo(document.body);
    // };
    return {
        change: function () {
                // if ($(".banner").is(":visible")) {
                //     $(".banner").hide();
                // } else {
                //     $(".banner").show();
                // }
            $(".banner").hide();
        }
    }
});
