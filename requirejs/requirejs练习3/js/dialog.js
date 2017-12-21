/**
 * Created by sunweixin on 2017/12/7.
 */
requirejs.config({
    paths : {
        jquery:"jquery-3.2.1"
    }
});
define(["jquery"],function($){
    return{
        change : function(){
            $(".banner").hide();
        }
    }
});