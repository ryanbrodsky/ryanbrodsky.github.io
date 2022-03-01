$('#top-nav>ul>li').on('mouseenter mouseleave', function(e){
    $(this).children('.top-nav-dropdown-menu').toggleClass("active")
})