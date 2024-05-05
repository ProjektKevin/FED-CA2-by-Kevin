// (function () {
//     "use strict";
//     var forms = document.querySelectorAll(".needs-validation");

//     // loop over them and prevent submission
//     Array.prototype.slice.call( forms ).forEach( function ( form ) {
//         form.addEventListener("submit", function (event) {
//             // Validate form fields
//             if (!form.checkValidity()) {
//                 event.preventDefault();
//                 event.stopPropagation();

//                 // Show error messages for invalid fields
//                 var errorMessages = form.querySelectorAll(".invalid-feedback");
//                 Array.prototype.slice.call(errorMessages).forEach(function (error) {
//                     error.style.display = "block";
//                 });

//                 // Hide reCAPTCHA error message if any
//                 document.getElementById("captcha-error").style.display = "none";
//             } else {
//                 // Check if reCAPTCHA is completed
//                 var recaptchaResponse = grecaptcha.getResponse();
//                 if (recaptchaResponse.length === 0) {
//                     // reCAPTCHA not completed, prevent form submission
//                     event.preventDefault();
//                     document.getElementById("captcha-error").style.display = "block";
//                     return;
//                 } else {
//                     // reCAPTCHA completed, hide error
//                     document.getElementById("captcha-error").style.display = "none";
//                 }

//                 // Form is valid, show a window alert
//                 window.alert("Thank you for your Feedback! Feedback has been successfully submitted.");

//                 // Reset reCAPTCHA
//                 grecaptcha.reset();

//                 // Reset form fields and validation state
//                 form.reset();
//                 form.classList.remove("was-validated");

//                 // Clear all error messages
//                 var errorMessages = form.querySelectorAll(".invalid-feedback");
//                 Array.prototype.slice.call(errorMessages).forEach(function (error) {
//                     error.style.display = "none";
//                 });
//             }

//             form.classList.add("was-validated");
//         }, false);
//     });

//     var resetButton = document.getElementById("reset-button");

//     resetButton.addEventListener("click", function () {
//         Array.prototype.slice.call(forms).forEach(function (form) {
//             // Reset reCAPTCHA
//             grecaptcha.reset();

//             // Reset form fields and validation state
//             form.reset();
//             form.classList.remove("was-validated");

//             // Clear all error messages
//             var errorMessages = form.querySelectorAll(".invalid-feedback");
//             Array.prototype.slice.call(errorMessages).forEach(function (error) {
//                 error.style.display = "none"; // Reset the display style
//             });

//             // Hide reCAPTCHA error message
//             document.getElementById("captcha-error").style.display = "none";
//         });
//     });

// })();




var abc = [1,2,3];
array.forEach(function,{
    
});