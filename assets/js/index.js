
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
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.//use CSS classes in style.css//need if statemnent 


// Allow a user to enter an event when they click a timeblock
//click event to enter time block
//form for input?





//function to update calendar display with the current date, events retrieved from localStorage, and CSS classes to indicate whether time slots are in the past, present, or future.
//used internet/lesson for help here.

$(document).ready(function () {
    //need to identify/select elements
  var container = $('.calendar-container');
  var currentDateElement = $('#currentDate');
  var currentDate = dayjs(); // today's date

  function updateCalendar() {
    //updates the text content of the HTML element with the id "currentDate" to display the current date in a specific format using the format method of the currentDate object
    currentDateElement.text(currentDate.format('dddd, MMMM D, YYYY'));
    // get data from the browser's localStorage based on the current date in format ('YYYY-MM-DD'). It parses the JSON data, and if there is no data for the current date, it initializes an empty object as the value of the events variable.
    var events = JSON.parse(localStorage.getItem(currentDate.format('YYYY-MM-DD'))) || {};
    //clear classes each day to esure colours are correct
    container.find('.time-block').removeClass('past present future');

    //loop over the time slots to check for past/present/future to re-assign classes for slot colours 
    for (var i = 9; i <= 18; i++) {
      var timeBlock = $('#' + i);
      var timeSlot = $('#time-slot' + (i - 8));
    //checks if there's an event stored in the events object for the current time slot (i). If there is, it sets the value of the corresponding timeSlot input element to the event. If there isn't, it sets the timeSlot input element value to an empty string.
      if (events[i]) {
        timeSlot.val(events[i]);
      } else {
        timeSlot.val('');
      }
      //adds CSS classes ('past', 'present', or 'future') to the timeBlock element based on a comparison between the current time slot (i) and the current hour of the day from currentDate. If the time slot is in the past, it gets the 'past' class; if it's the current hour, it gets the 'present' class; otherwise, it gets the 'future' class
      if (i < currentDate.hour()) {
        timeBlock.addClass('past');
      } else if (i === currentDate.hour()) {
        timeBlock.addClass('present');
      } else {
        timeBlock.addClass('future');
      }
    }
  }

 