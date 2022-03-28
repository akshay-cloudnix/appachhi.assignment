// Navbar: Add Active class onclick
$(".reports-tab li a").click(function(){
    $(".reports-tab li").removeClass("active");
    $(this).parent("li").addClass("active");
});

// Toggle Create Report Element
$('body').on("click", "#toggle_report_new", function(){
    $(".report-add, .report-list").fadeToggle("fast");
});