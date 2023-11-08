
//get elements



//Display the current day at the top of the calender when a user opens the planner.

var timeEl = $('#currentDay');

//adds event listener to remove delay and lets DOM load first
document.addEventListener('DOMContentLoaded', function() {
    //timeEl stores currentDay
    var timeEl = document.getElementById('currentDay');

    function displayDay() {
        var rightNow = dayjs().format('dddd D MMMM YYYY [at] h:mm:ss a');
        timeEl.textContent = rightNow;
    }

    displayDay();
    setInterval(displayDay, 1000);
});


// //time display code from lesson/research
//works but there is a delay when loading
// function displayDay() {
//     var rightNow = dayjs().format('dddd D MMMM YYYY [at] hh:mm:ss a'); timeEl.text(rightNow);
//     $("#currentDay").text(rightNow);
// };


// $(document).ready(function () {
//     var rootElement = $('#root');
// });

// Present timeblocks for standard business hours when the user scrolls down.
//create table using div in html


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
//adjust css using jquery depending on click events


// Allow a user to enter an event when they click a timeblock
//click event to enter time block
//form for input?


// Save the event in local storage when the save button is clicked in that timeblock.
//local storsge code for jquery


// Persist events between refreshes of a page
//recall from local storage?

