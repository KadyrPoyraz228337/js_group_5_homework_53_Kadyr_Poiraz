import React, {Component} from 'react';
import AddTAskForm from "./Components/AddTaskForm";
import TaskItem from "./Components/TaskItem";


class App extends Component {
  constructor(props) {
    super(props);
    this.counter = this.state.tasks.length;
    // this.tasks =
  }
  state = {
    text: '',
    tasks: JSON.parse(localStorage.getItem('Tasks')) || [
      {content: 'Доделать д/з', isEdit: false, isCompleted: false, id: 1},
      {content: 'По хавать печеньки', isEdit: false, isCompleted: false, id: 2},
      {content: 'Загрузить д/з на git репозеторий', isEdit: false, isCompleted: false, id: 3},
    ]
  };
  render() {

    return (
        <div className="container">
            <AddTAskForm
              onClick={() => this.addTask()}
              input={event => this.changeText(event)}
              text={this.state.text}
            />
            <div className="taskBlock">
              {this.state.tasks < 1 ? <p className="bg">Список пуст</p> : null}
              {this.state.tasks.map((task, index) => {
                return (
                    <TaskItem
                        key={task.id}
                        content={task.content}
                        task={`задача ${index+1}`}
                        deleteOnClick={() => this.removeItem(task.id)}
                        editOnClick={() => this.editItem(task.id)}
                        isEdit={task.isEdit}
                        onChange={event => this.changeTask(event,task.id)}
                        checked={() => this.checkBoxState(task.id)}
                        isChecked={task.isCompleted}
                    />
                )
              })}
            </div>
        </div>
    )
  }

  checkBoxState = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(e => e.id === id);
    const task = {...tasks[index]};

    task.isCompleted = !task.isCompleted;

    tasks[index] = task;

    this.addToLocalStorage(tasks);

    this.setState({tasks});
  };

  changeText = event => {
    this.setState({text: event.target.value});
  };

  addToLocalStorage = tasks => {
    // tasks.map(task => task.isEdit = false);
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };

  addTask = () => {
    if(this.state.text.length > 0) {
      this.counter++;

      const tasks = [...this.state.tasks];
      const newTask = {content: this.state.text, isEdit: false, isCompleted: false, id: this.counter};

      tasks.push(newTask);
      this.addToLocalStorage(tasks);

      this.setState({tasks});
      this.setState({text: ''});

    }
  };

  changeTask = (event, id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(e => e.id === id);
    const task = {...tasks[index]};

    task.content = event.target.value;
    tasks[index] = task;

    this.setState({tasks});

  };

  removeItem = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(e => e.id === id);

    tasks.splice(index, 1);

    this.setState({tasks});
    this.addToLocalStorage(tasks);

  };

  editItem = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(e => e.id === id);
    const task = tasks[index];

    task.isEdit = !task.isEdit;
    tasks[index] = task;

    this.setState({tasks});
    this.addToLocalStorage(tasks);

  }
}

export default App;
