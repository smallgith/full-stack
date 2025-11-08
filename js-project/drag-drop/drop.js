// const cards = document.querySelectorAll('.card')
// const lists = document.querySelectorAll('.list')

// for(const card of cards){
//    card.addEventListener('dragstart',dragStart)
//    card.addEventListener('dragend',dragEnd)
// }
// for(const list of lists){
//     list.addEventListener('dragover',dragOver)
//     list.addEventListener('dragenter',dragEnter)
//     list.addEventListener('dragleave',dragLeave)
//     list.addEventListener('drop',dragDrop)
// }
// function dragStart(e){
//     e.dataTransfer.setData("text/plain",this.id)
// }
// function dragEnd(e) {
//     console.log("dragend")
// }
// function dragOver(e) {
//  e.preventDefault()
 
// }
// function dragEnter(e) {
//     e.preventDefault()
//     this.classList.add("over")
// }
// function dragLeave(e) {
//     this.classList.remove("over")

// }
// function dragDrop(e) {
//     const id = e.dataTransfer.getData("text/plain")
//     const card = document.getElementById(id)
//     this.appendChild(card)
//     this.classList.remove("over")
// }


// Select all draggable cards and lists
const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

// Step 1: When dragging starts
cards.forEach(card => {
    card.addEventListener('dragstart', () => {
        card.classList.add('dragging');
    });

    // Step 2: When dragging ends
    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });
});

// Step 3: Add drop area functionality
lists.forEach(list => {
    
    list.addEventListener('dragover', e => {
        e.preventDefault(); // allows dropping
        const draggingCard = document.querySelector('.dragging');

        list.appendChild(draggingCard);
    });
});
