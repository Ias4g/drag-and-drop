/**
 * -----------------------------------------------------------------------
 * Help
 * -----------------------------------------------------------------------
 */

// Help function to display messages on the console.
function log(message){
    console.log('> ' + message)
}

/**
 * -----------------------------------------------------------------------
 * App
 * -----------------------------------------------------------------------
 */

// Taking and placing all existing cards into <const cards>
const cards = document.querySelectorAll('.cards')

// Our cards
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart) // Adding dragstart event to cards
    card.addEventListener('drag', drag) // Adding drag event to cards
    card.addEventListener('dragend', dragend) // Adding dragend event to cards
})

//Adding functionality to the dragstart event when cards are being dragged.
function dragstart(){
    // log('CARD: Start dragging...')
}

function drag(){
    // log('CARD: Is dragging...')
}

function dragend(){
    // log('CARD: Stop drag!!')
}

/**
 * -----------------------------------------------------------------------
 * Area where cards will be dropped.
 * -----------------------------------------------------------------------
 */

// Taking and placing all existing dropzones into <const dropzones>
const dropzones = document.querySelectorAll('.dropzones')
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    // log('DROPZONE: Enter in zone')
}

function dragover(){
    // log('DROPZONE: Over')
}

function dragleave(){
    // log('DROPZONE: Leave')
}

function drop(){
    // log('DROPZONE: Dropped')
}