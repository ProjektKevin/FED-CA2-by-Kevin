/*
    CA2 – Interactive Website
    
    Scroll Indicator page
    Author: Min Thet Khine
    Date:   5 Aug 2023

    Filename: progress.js
*/

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("scroll-progress"); //get the id
  
    window.addEventListener("scroll", function () {
        const windowHeight = window.innerHeight; // get the height of the window
        const documentHeight = document.documentElement.scrollHeight; // get the height of the enitre paage
        const scrollTop = window.scrollY;  // get the vertical scroll position of the webpage (only works for morden browsers)
        
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100; // calculate the percentage
        progressBar.style.width = scrollPercentage + "%"; // style the progress bar with the latest update
    });
});
  