$(document).ready(function(){
    
    $(window).on("scroll", function() {
            var ht = $(window).height();
            var scroll = $(window).scrollTop();			

            $("#wrap .offset_pos").each(function() {
                $(this).on("mousewheel", function(e) {
                    e.preventDefault();
                    var delta = 0;
                    delta = e.originalEvent.wheelDelta / 120;
                    var moveTop = null;
                     if (delta >= 0) {  
                 try{
                    var prev = $(this).prev().offset().top;
                 } catch(e){}
                 $("html,body").stop().animate({"scrollTop":prev},1500,"swing");
              }else if (delta <= 0) {  
                try{
                    var next = $(this).next().offset().top;
                } catch(e){}
                $("html,body").stop().animate({"scrollTop":next},1500,"swing");       
              }	
  
                    });	
	           });
            });

	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	
	//메뉴 버튼 클릭시
	$("#MoveList > ul > li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1000);
	});
	
	
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		
		/*
		if(scroll>=ht*0 && scroll< ht*1){
			$("#MoveList > ul > li").removeClass();
			$("#MoveList > ul > li").eq(0).addClass("on");
		}
		if(scroll>=ht*1 && scroll< ht*2){
			$("#MoveList > ul > li").removeClass();
			$("#MoveList > ul > li").eq(1).addClass("on");
		}
		if(scroll>=ht*2 && scroll< ht*3){
			$("#MoveList > ul > li").removeClass();
			$("#MoveList > ul > li").eq(2).addClass("on");
		}
		if(scroll>=ht*3 && scroll< ht*4){
			$("#MoveList > ul > li").removeClass();
			$("#MoveList > ul > li").eq(3).addClass("on");
		}
		*/
		
		for(var i=0; i<5;i++){
            console.log("scroll : "+ Math.round(scroll) + ", ht : " + ht + 
                          ", i :"+i + ", ht * i : " + ht*i);
			if(Math.round(scroll)>=ht*i && Math.round(scroll)< ht*(i+1)){
				$("#MoveList > ul > li").removeClass();
				$("#MoveList > ul > li").eq(i).addClass("on");
			};
		}	
        
		
		//section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event,delta){    
		
            //마우스 휠을 올렸을때	
            if (delta > 0) {  
                //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
                 try{
                    var prev = $(this).prev().offset().top;
                 } catch(e){}
                 //문서 전체를 prev에 저장된 위치로 이동
                 $("html,body").stop().animate({"scrollTop":prev},1000);

            //마우스 휠을 내렸을때	 
              }else if (delta < 0) {  
                //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
                try{
                    var next = $(this).next().offset().top;
                } catch(e){}

                //문서 전체를 next에 저장된 위치로 이동
                $("html,body").stop().animate({"scrollTop":next},1000);       
              }		
        });	
	});
});
