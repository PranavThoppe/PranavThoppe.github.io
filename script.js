const todoList = [{
    name: 'make',
    due: '2023-12-12'},
    {name: 'wash',
    due: '2023-12-13'}];


taskName = document.querySelector('.task');

date = document.querySelector('.due-date');

renderToDoList();

function renderToDoList()
{
    let todoListHtml = '';

    for(let i = 0; i < todoList.length; i++)
    {
        //console.log(todoList);
        const task = todoList[i].name;
        const taskDate = todoList[i].due;
        const html = `
            <p>
                <div class="task-container">${task}</div> 
                <div class="date-container">${taskDate}</div>
                <button class= "delete-button" onclick="
                    todoList.splice(${i}, 1);
                    renderToDoList();
                ">Delete</button> 
            </p>
        `;
        todoListHtml += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;
        //console.log(todoListHtml);

}
//console.log(todoListHtml);

function costKeyDown(key) {
    //console.log(event.key);
    if (key ==='Enter') {
        addTask();
    }
}

function addTask() 
{
    const task = taskName.value;
    const dueDate = date.value;

    //console.log(dueDate);

    todoList.push({
        name: task, 
        due: dueDate
    });

    taskName.value = '';

    renderToDoList();

}
