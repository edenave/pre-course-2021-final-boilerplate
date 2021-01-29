const addButton = document.getElementById("add-button");





const tasksList = document.getElementById("taskslist");

addButton.addEventListener("click", submitToList)

function submitToList() {

        const listItem = document.createElement("Li");
        const text = document.getElementById("text-input").value;
        const selectedItem = document.getElementById("priority-selector").value;
        const selectedOption = document.getElementById("priority-selector");
        const listValue=document.createTextNode(text);


        const containerDiv = document.createElement("div");

        containerDiv.className = "todo-container";

        const timeCreatedDiv = document.createElement("div");

        timeCreatedDiv.className = "todo-created-at";

        const priorityDiv = document.createElement("div");

        priorityDiv.className = "todo-priority";
        const textDiv = document.createElement("div");
        textDiv.className = "todo-text";
        if(text === ''){
            alert('no task entered')
        } else {

            textDiv.append(listValue);
            priorityDiv.append(selectedItem);
            timeCreatedDiv.append(new Date().toISOString().slice(0, 19).replace('T', ' '));

            containerDiv.append(priorityDiv, timeCreatedDiv, textDiv);

        listItem.append(containerDiv);


        document.getElementById("taskslist").appendChild(listItem);
        document.getElementById("text-input").value = '';
        
            count();


        selectedOption.remove(selectedOption.selectedIndex);
        
        }

    }


   


    function count(){
        const counter = document.getElementById("counter")
        let ul = document.getElementById('taskslist');
        let i=0, count =0;
        while(ul.getElementsByTagName('li')[i++]) count++;
        counter.innerText = count;

        }
         

