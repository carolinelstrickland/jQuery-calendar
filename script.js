$("#currentDay").text(moment().format("dddd MMMM Do"));

$(".time-block").each(function(){
    console.log($(this).children())

    $(this).addClass("present")
})