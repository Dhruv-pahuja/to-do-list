const inputBox = document.querySelector('input');
const listCont = document.querySelector('#list-container')

const addTask = ()=>{
    if(inputBox.value === ''){
        alert("you must write a task ")
    } else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
}

listCont.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

const saveData = ()=>{
    localStorage.setItem('data',listCont.innerHTML)
}

const showTask = ()=>{
    listCont.innerHTML = localStorage.getItem('data');
}
showTask()