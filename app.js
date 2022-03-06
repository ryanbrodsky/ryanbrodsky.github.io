$('#top-nav>ul>li').on('mouseenter mouseleave', function(e){
    $(this).children('.top-nav-dropdown-menu').toggleClass("active")
})

$(".burger-menu").on("click", function(){
    $(this).toggleClass("change");
    $("#top-nav-dropdown-parent-list").toggleClass("active")
})
$('.dropdown-parent-list-item>a').on('click', function(){
    if(window.innerWidth < 800){
        $('.burger-menu').toggleClass("change")
        $("#top-nav-dropdown-parent-list").toggleClass("active")
    }
})