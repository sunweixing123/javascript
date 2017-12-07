/**
 * Created by sunweixin on 2017/12/6.
 */
requirejs.config({
    paths : {
        jquery: "jquery-3.2.1"   }
});
require(["jquery","dialog"],function($,dialog){
    $('#open').on("click",function() {
        // var settings = {
        //     width: 300,
        //     height: 200
        // };
        // var p1=new Dialog();
        // p1.open();
        dialog.open();
    });
});
