const addButton = document.getElementById("add-button");



const savedTasks = document.getElementById("taskslist");

function saveData(){
  localStorage.setItem("taskslist", savedTasks.innerHTML);
}

let localsaved =localStorage.getItem("taskslist");
  savedTasks.innerHTML = localsaved;


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
        saveData()
            count();



            

            

        selectedOption.remove(selectedOption.selectedIndex);
        
        }

    }




    const counter = document.getElementById("counter")
    let savedCount = localStorage.getItem("counter");
    function count(){

        let ul = document.getElementById('taskslist');
        let i=0, count =0;
        while(ul.getElementsByTagName('li')[i++]) count++;
        counter.innerHTML = count;
        localStorage.setItem("counter", counter.innerText); 




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

                    
                    if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {

                        
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
 









// function retriveViewSection(){
//     let taskslist = document.getElementById("taskslist").innerHTML;
//     taskslist = localStorage.getItem("view-section");
//     document.getElementById("view-section").innerHTML = taskslist;
// }





// function store() {
//     window.localStorage.myitems = list.innerHTML;
//   }
  
//   function getValues() {
//     var storedValues = window.localStorage.myitems;
//     if(!storedValues) {
//       list.innerHTML = '<li>Make a to do list</li>'+
//                        '<li>Check off first thing on the to do list</li>'+
//                        '<li>Realize you have already accomplished 2 things in the list</li>'+
//                        '<li>Reward yourself with a nap</li>';
//     }
//     else {
//       list.innerHTML = storedValues;
//     }
//   }
//   getValues();
// })();