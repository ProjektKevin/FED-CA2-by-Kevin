/*
    CA2 – Interactive Website
    
    validation page
    Author: Min Thet Khine
    Date:   5 Aug 2023

    Filename: validate.js
*/

// example starter javascript for disabling form submission if there are invalid fields
(function () {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation");

    // loop over them and prevent submission
    Array.prototype.slice.call ( forms ).forEach( function ( form ) {
        form.addEventListener("submit", function ( event ) {

            form.classList.add("was-validated"); //validate the form
            
            if(!form.checkValidity()) {
                event.preventDefault();
                // event.stopPropagation(); // this one just prevents from changing existing application code and spreading copies of the altered code to other users.
            }
            else {
                // if it enters here, form is valid, show a window alert
                window.alert("Thank you for your Feedback! \nFeedback has been successfully submitted.");

                form.reset();  // reset the entire form
                form.classList.remove("was-validated"); // remove the validated stuff (green/red stuffs)
            }

        }, false);
    });

    var resetButton = document.getElementById("reset-button");

    resetButton.addEventListener("click", function () {
        Array.prototype.slice.call(forms).forEach(function (form) {

            form.reset(); // reset the form
            form.classList.remove("was-validated"); // remove the validated stuff

        });

        window.alert("Form has been sucessfully reseted."); // announce reset was successful

    });
}) ();