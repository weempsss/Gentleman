$(document).ready(function(){
    
    var visual = $('.VisualSpace > ul > li');
             var button = $('.ButtonSpace > ul > li');
             var current = 0;
             var setIntervalid;
              timer();
             button.on({
                 click:function(){
                     var tg = $(this);
                     var i = tg.index();
                     button.removeClass('on'); //버튼이 2번째로 넘어가는 구간
                     tg.addClass('on');
                     move(i);
                 }
             });
             
             function move(i){
                 if(current == i) return;
                 
                 var current1 = visual.eq(current); // 지금 보여지고 있는
                 var next1 = visual.eq(i); // 보여져야될
                 
                 current1.css({left:0}).stop().animate({left:'-100%'}); // 치워야 될 개채
                 next1.css({left:'100%'}).stop().animate({left:0}); // 앞으로 볼 개채
                 
                 current = i;
             }
             
             $("#MainBanner").on ({
                 mouseover:function(){
                     clearInterval(setIntervalid);
                 },
                 mouseout:function(){
                     timer();
                 }
             });
             
             function timer(){
                 setIntervalid = setInterval(function(){
                     var n = current + 1;
                     if(n == visual.length){
                         n = 0;
                     }
                     button.eq(n).trigger('click');
                 },30000);
             }
    
});