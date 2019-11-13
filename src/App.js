import React, {Component} from 'react';
import AddTAskForm from "./Components/AddTaskForm";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    cards: [
      {title: 'Some title', subtitle: 'Some sub title', content: 'asddsaasddsaasddasasd'},
      {title: 'Some title', subtitle: 'Some sub title', content: 'asddsaasddsaasddasasd'},
      {title: 'Some title', subtitle: 'Some sub title', content: 'asddsaasddsaasddasasd'},
    ]
  };
  render() {
    return (
        <div className="container">
            <AddTAskForm/>
            <div className="taskBlock">
              <p className="bg">Список пуст</p>

            </div>
        </div>
    )
  }
}

export default App;
