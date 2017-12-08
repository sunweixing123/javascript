/**
 * Created by sunweixin on 2017/12/7.
 */
requirejs.config({
    paths : {
        jquery:"jquery-3.2.1"
    }
});
require(["jquery","dialog"],function($,dialog){
    $(".btn").on("click",function(){
        dialog.change();
    })
});