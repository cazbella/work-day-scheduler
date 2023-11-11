
//adds event listener (document.ready) to remove delay and lets DOM load first. There is a delay without this.
//code from example in lesson with modifications
$(document).ready(function () {

  var timeEl = $('#currentDay');
  var container = $('.container');
  var currentDateElement = $('#currentDate');
  var container = $('.calendar-container');
  var currentDateElement = $('#currentDate');
  var rightNow = dayjs().format('dddd D MMMM YYYY [at] h:mm:ss a');

  function displayDay() {
     timeEl.text(rightNow);
  }

  displayDay();
  setInterval(displayDay, 1000);
  // });
  //to put date to scroll
  // $(document).ready(function () {
  var currentDate = dayjs(); // dayjs() gets today's date
  console.log(currentDate)


  // "Previous Day" button click
  $('#prevDay').click(function () {
    currentDate = currentDate.subtract(1, 'day');
    console.log("inthe prev click : ", currentDate)
    console.log("inthe prev click MONTH: ", currentDate.$D)
    updateCalendar();
  });

  // "Next Day" button click
  $('#nextDay').click(function () {
    currentDate = currentDate.add(1, 'day');
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

  //worked through with tutor
  function updateCalendar() {
    //updates the text content of the HTML element with the id "currentDate" to display the current date in a specific format using the format method of the currentDate object
    currentDateElement.text(currentDate.format('dddd, MMMM D, YYYY'));
    // get data from the browser's localStorage based on the current date in format ('YYYY-MM-DD'). It parses the JSON data, and if there is no data for the current date, it initializes an empty object as the value of the events variable.
    var events = JSON.parse(localStorage.getItem(currentDate.format('YYYY-MM-DD'))) || {};
    //clear classes each day to esure colours are correct
    container.find('.row').removeClass('past present future');

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
      //adds CSS classes ('past', 'present', or 'future') to the timeBlock element based currentDate

      //makes all past grey
      if (currentDate.isBefore(dayjs(), 'day')) {
        console.log("past!")
        timeBlock.addClass('past');
      }
      //makes all future green
      else if (currentDate.isAfter(dayjs(), 'day')) {
        timeBlock.addClass('future');
      }
      //this block for current day
      else {
        if (i < currentDate.hour()) {
          timeBlock.addClass('past');
        } else if (i === currentDate.hour()) {
          timeBlock.addClass('present');
        } else {
          timeBlock.addClass('future');
        }
      }
    }
  }

  function saveEvent() {
    var timeBlockId = $(this).parent().attr('id');
    var eventText = $(this).siblings('.activity').val();
    //code from class - string to object
    //fetch from local storage
    //if no data - empty object
    var events = JSON.parse(localStorage.getItem(currentDate.format('YYYY-MM-DD'))) || {};
    events[parseInt(timeBlockId)] = eventText;
    localStorage.setItem(currentDate.format
      //converted to string
      ('YYYY-MM-DD'), JSON.stringify(events));
  }

  $('.saveBtn').click(saveEvent);
  updateCalendar();

function deleteEvent() {
  var timeBlockId = $(this).parent().attr('id');
  //retrieves specific time block
  var events = JSON.parse(localStorage.getItem
    //retrieves events from local storage
    (currentDate.format('YYYY-MM-DD'))) || {};
  delete events[parseInt(timeBlockId)];
  //deletes event in the time block
  localStorage.setItem(currentDate.format
    //re-saves event
    ('YYYY-MM-DD'), JSON.stringify(events));
  updateCalendar();
}
//event listener jquery. $document refers to the whole document
//.on targets element click on delete button. This is Jquery. 
$(document).on('click', '.deleteBtn', deleteEvent);
//deleteEvent is callback function executed when the specified event occurs 


});