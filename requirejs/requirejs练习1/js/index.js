/**
 * Created by sunweixin on 2017/12/6.
 */
requirejs.config({
    paths : {
        jquery:"jquery-3.2.1"
    }
});
require(["jquery","pop"],function($,pop){
    $("#btn").on("click",function(){
       pop.change();
    });
});
