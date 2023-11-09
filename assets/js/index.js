
//get elements

//Display the current day at the top of the calender when a user opens the planner.

var timeEl = $('#currentDay');

//adds event listener (document.ready) to remove delay and lets DOM load first. There is a delay without this.
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

//Next need to
  //load items from local storage on page 
  //or use the ' ' empty bracket code to clear tect area if no even - like in the lesson
  //update 'currentDate' with date of current day of the CALENDAR - not visible. link to actual time
  //need variable current date
  //need a for loop for i to loop through times of the day. Need to use hours of the day (9-18??)
  //need variables to store elements after finding current value of i
  //need conditional to check whether there are events stored for the current hour (i) within the events object.
  //there are events for the current hour, need to set the value of the timeSlot element to the corresponding event text. If there are no events, need to clear the text area by setting its value to an empty string (like in lesson code)
//Then
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.//use CSS classes in style.css

//adjust css using jquery depending on click events


// Allow a user to enter an event when they click a timeblock
//click event to enter time block
//form for input?


// Save the event in local storage when the save button is clicked in that timeblock.
//local storsge code for jquery


// Persist events between refreshes of a page
//recall from local storage?

