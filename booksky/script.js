// Selecting popup box, popup overlay, and add popup button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select overall container, add book button, and input fields
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book"); // Fixed selection of `add-book`
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-button">delete</button>
    `;

    // Append new book to the container
    container.append(div);

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear the input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // Attach event listener to the delete button
    var deleteButton = div.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        div.remove();
    });
});
