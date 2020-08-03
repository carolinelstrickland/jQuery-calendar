$("#currentDay").text(moment().format("dddd MMMM Do"));

$(".time-block").each(function(){
    let timeBlock = parseInt($(this).attr("id").split("-")[0]);
    let currentHour = moment().hour();

    console.log(timeBlock);

    if (timeBlock === currentHour) {
        $(this).addClass("present");
    }

    if (timeBlock > currentHour) {
        $(this).addClass("future");
    }

    if (timeBlock < currentHour) {
        $(this).addClass("past");
    }
});