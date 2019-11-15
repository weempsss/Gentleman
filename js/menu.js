$(document).ready(function(){
$('#fullpage > .section > .naviga >.leftNav>ul>.InMenu').on({
            mouseenter:function(){              
              $('#fullpage > .section > .naviga >.leftNav>ul>.InMenu>ul').hide();
              $(this).find('ul').stop().slideDown(200);
            },
            mouseleave:function(){
              $('#fullpage > .section > .naviga >.leftNav>ul>.InMenu>ul').show();  
              $('#fullpage > .section > .naviga >.leftNav>ul>.InMenu>ul').stop().slideUp(200);
            }
      });
});