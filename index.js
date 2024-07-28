let offsetTop=$("#about").offset().top()
$(window).on("scroll",function(){
    let scrolltop=$(window).scrollTop()
    if(scrolltop>offsetTop)
        {
            $('.navbar').css("background","rgba(0,0,0,0.5)")
        }
        else{
            $('.navbar').css("background","transparent")
        }
})