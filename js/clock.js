/*
    CA2 – Interactive Website
    
    Date & Time page
    Author: Min Thet Khine
    Date:   5 Aug 2023

    Filename: clock.js
*/

// define object with two methods
const dateTime = {
  currentDate: null, // this property will hold the current date and time

  updateDateTime: function() {
    this.currentDate = new Date(); // set the value of the 'currentDate' property to the curren date and time
  },
  
  getFormattedDateTime: function() {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }; //specify the desired format
    return this.currentDate.toLocaleString('en-US', options).replace(',', '<br>'); // returns a formatted string representation of the 'currentDate' property
  }
};

function updateTime() {
  dateTime.updateDateTime();
  document.getElementById("clock").innerHTML = dateTime.getFormattedDateTime();
}
  
// Call the updateTime function every second
setInterval(updateTime, 1000);
  
// Call the function once immediately to show the date and time on page load
updateTime();
