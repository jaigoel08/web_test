let todoList= [
    {
        item:'Buy Milk', 
        dueDate:'4/6/2024'
}, 
    {item:'go to collge',
     dueDate:'4/6/2024'
}
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDAte: todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems() {
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
 
    for(let i=0; i<todoList.length; i++) {
        let {item, dueDate} = todoList[i];
          let todoItem= todoList[i].item;
          let todoDate=todoList[i].dueDate
        newHtml+=`
       <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
         `;
       containerElement.innerHTML = newHtml;
    }
}