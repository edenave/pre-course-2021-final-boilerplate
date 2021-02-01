const addButton = document.getElementById("add-button");

let remaining = 0;   

const savedTasks = document.getElementById("taskslist");

function saveData(){
  localStorage.setItem("taskslist", savedTasks.innerHTML);
}

let localsaved =localStorage.getItem("taskslist");
  savedTasks.innerHTML = localsaved;


const tasksList = document.getElementById("taskslist");

addButton.addEventListener("click", submitToList)

function submitToList() {

        const listItem = document.createElement("li");
        listItem.className = "li";
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

        const deleteButton = document.createElement("button");
        deleteButton.innerText = 'x';
        deleteButton.className = "delete-button"

        if(text === ''){
            alert('no task entered')
        } else {

            textDiv.append(listValue);
            priorityDiv.append(selectedItem);
            timeCreatedDiv.append(new Date().toISOString().slice(0, 19).replace('T', ' '));

            containerDiv.append(deleteButton, priorityDiv, timeCreatedDiv, textDiv);



        listItem.append(containerDiv);

            
        document.getElementById("taskslist").appendChild(listItem);
        document.getElementById("text-input").value = '';
        saveData()
            count();

            remaining++;
            document.getElementById('remaining').innerHTML =  remaining;
            localStorage.setItem("remaining", document.getElementById('remaining').innerHTML); 

            

            


        
        }

    }




    const counter = document.getElementById("counter")
    let savedCount = localStorage.getItem("counter");
    function count(){

        let ul = document.getElementById('taskslist');
        let i=0, count =0;
        while(ul.getElementsByTagName('li')[i++]) count++;
        counter.innerHTML = count;

        localStorage.setItem("counter", counter.innerHTML); 




        }
        counter.innerHTML = savedCount;

const sortButton = document.getElementById("sort-button");

sortButton.addEventListener("click", sortTasks)
    function sortTasks(){
            list = document.getElementById("taskslist");
            priorityDiv = document.getElementsByClassName("todo-priority");

                let i
                let switching;
                let shouldSwitch;
                switching = true;
               

                while (switching) {

                  switching = false;
                  b = list.getElementsByClassName("todo-priority");
                  li = document.getElementsByTagName("li");

                  
                  for (i = 0; i < (b.length - 1); i++) {


                    shouldSwitch = false;

                    
                    if (Number(b[i].innerHTML) < Number(b[i + 1].innerHTML)) {

                        
                      shouldSwitch = true;
                      break;
                    }
                  }
                  if (shouldSwitch) {

                    
                    li[i].parentNode.insertBefore(li[i + 1], li[i]);
                    switching = true;
                    saveData()

                  }
                }
              }



let list1 = document.querySelector('ul');
list1.addEventListener('click', function(ev) {

    ev.target.classList.toggle('done');
    ev.target.parentNode.classList.toggle('done')
    saveData()

  }, false);


  list1.addEventListener('click', function(ev) {
    if (ev.target.className === 'delete-button') {
      ev.target.classList.toggle('delete');
      ev.target.parentNode.classList.toggle('delete')
        if(remaining > 0){
      remaining--;
    }
      document.getElementById('remaining').innerHTML =  remaining;
      localStorage.setItem("remaining", document.getElementById('remaining').innerHTML); 
saveData()
    }
  }, false);


let savedRemaining = localStorage.getItem("remaining");

document.getElementById('remaining').innerHTML = savedRemaining