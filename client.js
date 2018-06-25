console.log('js');
$(document).ready(readyNow)

function readyNow() {
    addEventHandler()
}

function addEventHandler() {
    $('#genButton').on('click', newDivBlock)
}

function newDivBlock() {
    console.log('here');
    let $div = $('<div class="colorBlock"></div><br>');
    $div.append('<p id="clickCounter"><span id="countVal">0</span></p>');
    $div.append('<button id="swapButton">SWAP!!!</button>');
    $div.append('<button id="deleteButton">DELETE!!!</button>');
    $('#blockField').append($div);
}