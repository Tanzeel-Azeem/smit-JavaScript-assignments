var list = document.getElementById("list");

var cities = [];

showlist()

function addCities (){
    
    
    var tasks = document.getElementById("tasks");
    if (tasks.value == "" ){
        alert("Please enter a tasks");
    }
    else if (cities.includes(tasks.value)){
        alert("task already exists in the list");
        tasks.value = "";
    }
    else{
        cities.push(tasks.value)
        list.innerHTMl = ""
        showlist()
        tasks.value = ""
    }
    setToLocalStorage()
    
}

function showlist(){
    
    list.innerHTML = "";
    for (var i = 0; i < cities.length; i++){
        list.innerHTML += `<li>${cities[i]} <span style="margin : 10px 20px;"><svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" onclick = "deleteCity(${i})" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" onclick = "editCity(${i})" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></span></li>`;
    }
    getFromLocalStorage()
}


function deleteCity(index){
    console.log();
    cities.splice(index, 1)
    showlist()
    setToLocalStorage()
}
function editCity(index){
    var userValue = prompt("Enter the new tasks", cities[index]);
    cities.splice(index, 1, userValue)
    showlist()
    setToLocalStorage()
}

function setToLocalStorage(){
    var setItem = localStorage.setItem("Tasks", JSON.stringify(cities))
    console.log(setItem);
}

function getFromLocalStorage(){
    var getItem = localStorage.getItem("Tasks")
    console.log(JSON.parse(getItem));
    
}
