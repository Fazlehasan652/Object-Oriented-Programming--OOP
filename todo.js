class TodoList {
  constructor(name) {
    this.name = `${name} Todo List`;
    this.todoList = [];
  }
  addTask(task) {
    this.todoList.push(task);
  }
  printTask() {
    console.log(`Task in ${this.name}`);
    this.todoList.forEach((el, index) => {
      console.log(`${index + 1}. ${el}`);
    });
  }
}
// 1 Personal Todo List 
const personalTodoList = new TodoList("Personal")
personalTodoList.addTask("Buy groceries")
personalTodoList.addTask("clean the House")
personalTodoList.addTask("Finish homework")
personalTodoList.printTask()
// 1 Personal Offical List 
const officialTodoList = new TodoList("Official")
officialTodoList.addTask("Prepare Presentation")
officialTodoList.addTask("Attend Meeting")
officialTodoList.addTask("Send emal update")
officialTodoList.printTask()