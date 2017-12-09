/**
 * Created by sunweixin on 2017/12/9.
 */
requirejs(["jquery","carousel"],function($,Carousel){
  var c1=new Carousel();
  var settings1={
      imgArr:["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg"],
      speed:500,
      buttonstyle:'square',
      selector:'div1'
  };
  c1.init(settings1);
   var c2=new Carousel();
   var settings2={
    imgArr:["imgs/2.jpg","imgs/3.jpg","imgs/4.jpg"],
    speed:1000,
      buttonstyle:'circle',
      selector:'div2'
  };
   c2.init(settings2);
});
