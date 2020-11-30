
let darkThemeButton = document.querySelector(".DarkTheme");
let cancelButton = document.querySelector(".Cancel");
let newNoteButton = document.querySelector(".NewNote");
let saveButton = document.querySelector('.Save');
let navSect = document.querySelector('nav ul');

let note1 = {
    title: "note one",
    body: "some text 1"
}
let note2 = {
    title: "note two",
    body: "some text 2"
}

let notesArray = [note1, note2]

function darkTheme(){
    let navItems = document.querySelector(' nav');
    let mainItems = document.querySelector('main');
    let textarea = document.querySelector('.textarea')
    let darkButton = document.querySelector('.DarkTheme');

    navItems.classList.toggle("dark_theme");
    mainItems.classList.toggle('dark_theme');
    textarea.classList.toggle('dark_theme');
    darkButton.classList.toggle('light_theme');
    if (darkButton.classList.contains('light_theme')){
        darkButton.innerHTML = 'Light Theme'
    }
    else{
        darkButton.innerHTML = 'Dark Theme'
    }
}

function cancelBtn(){
    let textarea = document.querySelector(".textarea");
    let botBtns = document.querySelector(".bottom")
      textarea.style.display = "none";
      botBtns.style.display = "none";
}

function newNoteBtn(){
    let textarea = document.querySelector(".textarea");
    let botBtns = document.querySelector(".bottom")
    if (textarea.style.display === "block"){
        textarea.value = ''
    }
    if(textarea.style.display === "none"){
        textarea.value = 'this is a placeholder'
    }
    textarea.style.display = "block";
    botBtns.style.display = "Flex";
}


function saveBtn(){
    let textarea = document.querySelector(".textarea");
    let textcontent = textarea.value.split('\n')
    let condensText = ''
    for(line of textcontent){
        if(!(line === textcontent[0])){
            condensText += String(line) + " " 
        }
    }
    let note3 = {title: `${textcontent[0]}`, body: `${condensText}` }

    let newNote = document.createElement('li')
    newNote.innerHTML = `${note3.title}`
    let navSect = document.querySelector('nav ul')
    navSect.appendChild(newNote)
    notesArray.push(note3)
    navSect.addEventListener('click', loadNote)

}

function loadNote(evnt){
    console.log(evnt)
    console.log(notesArray)
    let textarea = document.querySelector('.textarea')

    for(note of notesArray){
        if (evnt.target.innerHTML === note.title)
        textarea.value = note.title + "\n" + note.body
    }
}

navSect.addEventListener('click', loadNote);
darkThemeButton.addEventListener('click', darkTheme);
cancelButton.addEventListener("click", cancelBtn)
newNoteButton.addEventListener("click", newNoteBtn)
saveButton.addEventListener("click", saveBtn)


