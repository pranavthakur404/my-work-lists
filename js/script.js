const title = document.querySelector(".title-input");
const data = document.querySelector(".data-input");
const inputForm = document.querySelector(".task-input");
const editForm = document.querySelector(".edit-form");
const bigTaskContainer = document.querySelector(".big-task-container")

// adding event on form submit
inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // creating element
    if (title.value != "") {
        const div = document.createElement("div");
        div.setAttribute('class', 'task-block')
        // getting title and data value
        const titleValue = title.value;
        const dataValue = data.value;

        // inserting data in div element
        div.innerHTML = `
    <div class="buttons">
    <button class="del-btn">Delete <span class="fa fa-trash"></span></button>
    <button class="edit-title">Edit Title <span class="fa fa-edit"></span></button>
    <button class="edit-data">Edit Data <span class="fa fa-edit"></span></button>
    <button class="done-btn">Done</button>
    </div>
    <div class="text">
        <h3>${titleValue}</h3>
        <p>${dataValue}</p>
        <textarea name="editing" class="editing-box"></textarea>
    </div>`
        // adding div element to the list
        bigTaskContainer.append(div)
        // removing value from the input
        title.value = "";
        data.value = "";
    }
})

// working on delete button
const delButton = document.querySelector(".del-btn");
const editButton = document.querySelector(".edit-btn");
var check = 0;
bigTaskContainer.addEventListener('click', (e) => {
    
    if (e.target.classList.contains("del-btn")) {
        const targetElement = e.target.parentNode.parentNode;
        targetElement.remove();
    }

    // if user want to edit title
    if(e.target.classList.contains("edit-title")){
        const doneButton = e.target.nextElementSibling.nextElementSibling;
        const editor = e.target.parentNode.nextElementSibling.childNodes[5];
        doneButton.style.display = 'inline';
        editor.style.display = 'block';
        check = 1;
    }

    if(e.target.classList.contains("edit-data")){
        const doneButton = e.target.nextElementSibling;
        const editor = e.target.parentNode.nextElementSibling.childNodes[5];
        doneButton.style.display = 'inline';
        editor.style.display = 'block';
        check = 0;
    }

    if(e.target.classList.contains("done-btn")){
            // getting edited text
            const editedText = e.target.parentNode.nextElementSibling.childNodes[5];
            const title = editedText.previousElementSibling.previousElementSibling;
            if(check>=1){
                if(editedText.value.length > 0 ){
                    title.textContent = editedText.value;
                    editedText.value = '';
                    editedText.style.display = "none";
                    e.target.style.display = 'none';
                    check=0;
                }else{
                    editedText.style.display = "none";
                    e.target.style.display = 'none';
                    check=0;
                }
            }else{
                if(editedText.value.length >= 0 ){
                    const data = editedText.previousElementSibling;
                    data.textContent = editedText.value;
                    editedText.value = '';
                    editedText.style.display = "none";
                    e.target.style.display = 'none';
                 }
            }
    }

    if(e.target.classList.contains("edit-data")){
        console.log(e.target)
    }
})



