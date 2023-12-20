function loadTodos(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then (data => displayTodos(data))
}

function displayTodos(todos){
    //get the container
    const todoContainer = document.getElementById('todo-container');
 
    for(const todo of todos){
    //crat the child element
    console.log(todo);
const todoDiv = document.createElement('div');
//set innerText or inner Html
todoDiv.innerHTML=`
<h3>title: ${todo.title}</h3>
<p>User: ${todo.UserId}</p>


 `;
//appendChild
todoContainer.appendChild(todoDiv);


 }

}










loadTodos();