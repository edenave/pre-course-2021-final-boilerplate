const addButton = document.getElementById("add-button");





const tasksList = document.getElementById("taskslist");

addButton.addEventListener("click", submitToList)

function submitToList() {

        const listItem = document.createElement("Li");
        const text = document.getElementById("text-input").value; 
        const selectedItem = document.getElementById("priority-selector").value;
        
        const listValue=document.createTextNode(text);
        listItem.append(selectedItem,". " ,listValue);
        document.getElementById("taskslist").appendChild(listItem);
    }


   

