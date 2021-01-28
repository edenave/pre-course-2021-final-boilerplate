const addButton = document.getElementById("add-button");



const prioritySelector = document.getElementById("priority-selector");

const tasksList = document.getElementById("taskslist");

addButton.addEventListener("click", submitToList)

function submitToList() {
        const listItem = document.createElement("Li");
        const text = document.getElementById("text-input").value; 
        const listValue=document.createTextNode(text);
        listItem.appendChild(listValue);
        document.getElementById("taskslist").appendChild(listItem);
    }

