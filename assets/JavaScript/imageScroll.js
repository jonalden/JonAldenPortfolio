$('#ParentContainer').scroll(function() { 
    $('#FixedDiv').animate({top:$(this).scrollTop()},100,"linear");
})