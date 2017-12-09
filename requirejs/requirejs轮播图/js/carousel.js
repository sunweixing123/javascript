/**
 * Created by sunweixin on 2017/12/9.
 */
define(["jquery"],function($){
 function Carousel(){
     this.$container=$("<div class='container'></div>");
     this.$imgs=$("<div class='imgs'></div>");
     this.$nav=$("<ul class='nav'></ul>");
     this.$choose=$("<div class='choose'></div>");
     this.$prev=$("<span class='prev'>&lt;</span>");
     this.$next=$("<span class='next'>&gt;</span>");
     this.defaultSettings={
         imgArr:["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg"],
         speed:500,
         buttonstyle:'square',
         selector:'div1'
     };
     this.nowindex=0;
     this.timer=null;
 }
 Carousel.prototype.init=function(settings){
     $.extend(this.defaultSettings,settings);
     this.$choose.append(this.$prev).append(this.$next);
     this.$container.append(this.$imgs).append(this.$nav).append(this.$choose).appendTo(document.body);
     for(var i=0;i<this.defaultSettings.imgArr.length;i++){
         this.$imgs.append('<img src="'+this.defaultSettings.imgArr[i]+'"/>');
         this.$nav.append('<li>'+(i+1)+'</li>')
     }
     $('img:eq(0)',this.$imgs).add($('li:eq(0)',this.$nav)).addClass("selected").siblings().removeClass("selected");
     if(this.defaultSettings.buttonstyle=='circle'){
         $('li',this.$nav).css({
             borderRadius:'50%'
         }).html('')
     }
     var that=this;

     $('li',this.$nav).on("mouseover",function(){
         that.nowindex=$(this).index();
         changeImg();
     });
     this.$prev.on("click",function(){
         that.nowindex--;
         if(that.nowindex==-1){
             that.nowindex=that.defaultSettings.imgArr.length-1;
         }
         changeImg();
     });
     this.$next.on("click",function(){
        that.nowindex++;
        if(that.nowindex==that.defaultSettings.imgArr.length){
            that.nowindex=0;
        }
        changeImg();
     });
     this.$container.hover(function(){
         clearInterval(that.timer);
     },function(){
         play();
     });
     play();
     function changeImg(){
         $('li',that.$nav).eq(that.nowindex).add($('img',that.$imgs).eq(that.nowindex)).addClass("selected").siblings().removeClass("selected");
     }
     function play(){
         that.timer=setInterval(
             function(){
                 that.$next.trigger("click");
             },that.defaultSettings.speed
         );
     }
 };
 return Carousel;
});