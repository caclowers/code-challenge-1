console.log('js');
$(document).ready(readyNow)

let counter = 0

function readyNow() {
    addEventHandler()
}

function addEventHandler() {
    $('#genButton').on('click', newDivBlock);
    $('#swapButton').on('click', toggleColor);
    $('#deleteButton').on('click', deleteDivBlock)
}

function newDivBlock() {
    console.log('here');

    let $div = $('<div id="blockA"></div><br>');
    $div.append('<p id="clickCounter"><span id="countVal">0</span></p>');
    $div.append('<button id="swapButton">SWAP!!!</button>');
    $div.append('<button id="deleteButton">DELETE!!!</button>');
    $('#blockField').append($div);
    counter++;
    $('#countVal').text(counter)
}

function toggleColor() {
    //get class value of the div
    if ($('#blockA').hasClass()) {
        $('#blockA').toggleClass("swapColor")
    }
}

function deleteDivBlock() {

}