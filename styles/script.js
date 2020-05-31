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

// Taking and placing all existing dropzones into <const dropzones>
const dropzones = document.querySelectorAll('.dropzones')

// Our cards
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart) // Adding dragstart event to cards
    card.addEventListener('drag', drag) // Adding drag event to cards
    card.addEventListener('dragend', dragend) // Adding dragend event to cards
})

//Adding functionality to the dragstart event when cards are being dragged.
function dragstart(){
    // log('CARD: Start dragging...')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    // this = card
    this.classList.add('is-dragging')
}

function drag(){
    // log('CARD: Is dragging...')
}

function dragend(){
    // log('CARD: Stop drag!!')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    // tis = card
    this.classList.remove('is-dragging')
}

/**
 * -----------------------------------------------------------------------
 * Area where cards will be dropped.
 * -----------------------------------------------------------------------
 */

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
    // this = dropzone
    this.classList.add('over')

    // get gragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave(){
    // log('DROPZONE: Leave')
    // this = dropzone
    this.classList.remove('over')
}

function drop(){
    // log('DROPZONE: Dropped')
    this.classList.remove('over')
}