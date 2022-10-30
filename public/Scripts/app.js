
/*
File Name: app.js
Name: Sandip Mishra
Id: 301235936
Date: 30 October 2022
*/

// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
      console.log("App Started...");
      let deletebuttons = document.querySelectorAll(".btn-danger");
      for (button of deletebuttons) {
        button.addEventListener("click", (event) => {
          if (!confirm("Are you sure?")) {
            event.preventDefault();
            window.location.assign("/contacts-list");
          }
        });
      }
    }
    window.addEventListener("load", Start);
  })();
  