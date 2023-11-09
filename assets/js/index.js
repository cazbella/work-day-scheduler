
//get elements



//Display the current day at the top of the calender when a user opens the planner.

var timeEl = $('#currentDay');

//adds event listener (document.ready) to remove delay and lets DOM load first
//code from example in lesson with modifications
$(document).ready(function() {

    var timeEl = $('#currentDay');

    function displayDay() {
        var rightNow = dayjs().format('dddd D MMMM YYYY [at] hh:mm:ss a'); timeEl.text(rightNow);
    }

    displayDay();
    setInterval(displayDay, 1000);
});
//to put date to scroll
$(document).ready(function () {
  var currentDate = dayjs(); // dayjs() gets today's date
  var container = $('.container');
  var currentDateElement = $('#currentDate');

  function updateCalendar() {
    currentDateElement.text(currentDate.format('dddd, MMMM D, YYYY'));

    // need to be able to update time blocks
    
  }

  // "Previous Day" button click
  $('#prevDay').click(function () {
    currentDate = currentDate.subtract(1, 'day');
    updateCalendar();
  });

  // "Next Day" button click
  $('#nextDay').click(function () {
    currentDate = currentDate.add(1, 'day');
    updateCalendar();
  });

  // Calendar call function
  updateCalendar();
});


  

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

