console.log('jQuery Lecture');

$(document).ready(onReady); //This takes in a FUNCTION. Not a function call.

function onReady() {
    console.log('jQuery is ready');
    $('h1').css('color', 'red');
    $('h1').addClass('funny');
    
    // getters and setters
    console.log($('h2').text());
    $('h2').text('You have been set!!!');
    console.log($('h2').text());

    // inputs (also, getter and setter)
    $('#nameInput').val('Kevin');
    console.log($('#nameInput').val());

    // events
    $('#addPersonButton').on('click', function () {
        let newPersonName = $('#nameInput').val();
        let newButton = '<button class="deleteButton">DELETE</button>';
        $('#listOfNames').append('<li>' + newPersonName + newButton + '</li>');
    });

    // Delete Button Functionality
    $('#listOfNames').on('click', '.deleteButton', function () {
        $(this).parent().remove();
    });

    // 2nd Click Button (nu purpose yet)
    $('#iWasClickedButton').on('click', function() {
        console.log('I was clicked!');
    });
}