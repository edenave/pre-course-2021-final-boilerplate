const addButton = document.getElementById("add-button");   
const textInput = document.getElementById("text-input");
const prioritySelector = document.getElementById("priority-selector");
const tasksList = document.getElementById("tasksList");

addButton.addEventListener("click", submitToList)

function submitToList() {
    const listItem = document.createElement("li");
        const inputText = document.createTextNode(textInput);
        listItem.appendChild(inputText);
        if(inputText===""){
            alert("please write something");
        }else{
            tasksList.appendChild(listItem);
        }

}