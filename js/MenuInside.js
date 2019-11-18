$(document).ready(function(){
var isToggle = false;
    $(".naviga > .rightNav > .NavMenu > a > img").click(function() {
        if(!isToggle) {
            $("#MenuInside").slideDown(250, "swing");
            $(".naviga > .rightNav > .NavMenu > a > img").toggleClass("on");
            isToggle = true;
        } else {
            $("#MenuInside").slideUp(250, "swing");
            isToggle = false;
        }
        return false;
    });

});