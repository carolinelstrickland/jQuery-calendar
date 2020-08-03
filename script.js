$(document).ready(function(){

$("#currentDay").text(moment().format("dddd MMMM Do"));

function createDivs() {
    let holder = $("#holder")
    for (let i=9; i<=17; i++) {
        let timeBlock = $("<div>").addClass("row time-block").attr("id", i);
        let hourBlock = $("<div>").addClass("col-1 hour").text(i+":00");
        let textArea = $("<textarea>").addClass("col-md-10 description");
        let saveBtn = $("<button>").addClass("col-1 saveBtn").html("<i class = \"fas fa-save\"></i>");
        timeBlock.append(hourBlock).append(textArea).append(saveBtn);
        holder.append(timeBlock);


    //     <div class = "row time-block mx-2">
    //     <div id = "9" class = "col-1 hour">
    //       9AM 
    //       <textarea class = "col-md-10 description"></textarea>
    //       <button class = "btn saveBtn col-md-1"><i class = "fas fa-save"></i></button>
    //     </div>
    //   </div>
    }
}

createDivs();

$(".time-block").each(function(){
    let timeBlock = parseInt($(this).attr("id"));
    let currentHour = moment().hour();

    console.log(timeBlock);
    if (timeBlock < currentHour) {
        $(this).addClass("past");
    } else if (timeBlock === currentHour) {
        $(this).addClass("present");
    } else 
        $(this).addClass("future");
    }  
);

$(".saveBtn").on("click", function(){
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    console.log(time, value);
    let calendarEntry = JSON.parse(localStorage.getItem("savedEntries")) || [];
    calendarEntry.push({value, time});
    localStorage.setItem("savedEntries", JSON.stringify(calendarEntry));   
});
const storage = JSON.parse(localStorage.getItem("savedEntries"));
$(".description").each(function(){
    let id = $(this).parent().attr("id");
    console.log(id);
    for (let i=0; i<storage.length; i++) {
        if (id == storage[i].time) {
            $(this).text(storage[i].value);
        }
    }
})
});