/*
    CA2 – Interactive Website
    
    Pause & Play video page
    Author: Min Thet Khine
    Date:   29 MAY 2023

    Filename: videoPP.js
*/

// pause or play the video running in the background
const video = document.getElementById('backgroundVideo');  // get id
const toggleButton = document.querySelector('.pausePlayButton'); // Select the button
const icon = toggleButton.querySelector('.bi'); // Select the icon within the button

toggleButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        icon.className = 'bi bi-pause-fill'; // Change the icon to "pause"
    } 
    else {
        video.pause();
        icon.className = 'bi bi-play-fill'; // Change the icon to "play"
    }
});
