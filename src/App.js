import React, { Component } from 'react';
import { Input, Notification, Delete } from 'reactbulma';
import Header from './components/Header';
import './App.css';

// Unique key generator
let currentKey = 2;
const genKey = () => ++currentKey;

class App extends Component {

  // Set state for tasks
  state = {
    tasks: [
      { key: 1, job: 'Do the washing', dateTime: "29/11/2017, 14:03:33", completed: false },
      { key: 2, job: 'Walk the dog', dateTime: "29/11/2017, 14:04:51", completed: true }
    ],
    searchPhrase: '',
  }

  handleChangeQuery = (event) => {
    // Update state with search query
    this.setState({
      searchPhrase: event.target.value
    })
  }


  // Handle the submission of a new task
  addTask = (event) => {
    // Prevent the browser from refreshing upon pressing button
    event.preventDefault();

    // Make copy of current tasks
    const currentTasks = [...this.state.tasks];


    if (this.state.searchPhrase && !this.state.tasks.filter(task => task.job === this.state.searchPhrase).length) {
       // Add new tasks to list of tasks
      currentTasks.unshift({key: genKey(), job: this.state.searchPhrase, dateTime: new Date(), completed: false});

        // Update the state with the new tasks
        this.setState({
          tasks: currentTasks,
          searchPhrase: ''
        });
      } 
  }

  toggleComplete = (key) => {
    // Create a copy of the tasks Array
    const currentTasks = [...this.state.tasks];

    // Find the index key of the task for the function
    const index = currentTasks.findIndex(task => task.key === key)

    // Each time the button is clicked, the value of 'completed' is flipped
    currentTasks[index].completed = !currentTasks[index].completed

    // Use the flipped state in the copied Array and apply it to tasks in the state
    this.setState({
      tasks: currentTasks
    })
  }

  deleteTask = (key) => {
    // Create a copy of the tasks Array
    const currentTasks = [...this.state.tasks];

    // Find the index key of the task for the function
    const index = currentTasks.findIndex(task => task.key === key)

    // If the index isn't already deleted, delete the selected index
    if (index !== -1) {
      currentTasks.splice(index,1);
    }

    // Use the copied Array without the task we just deleted, and update the state with it
    this.setState({
      tasks: currentTasks
    })

  }
  // Render component
  render() {

    // Destructure props
    const {tasks, searchPhrase} = this.state

    return (
      <div className='App'>
      <Header 
      className="header"
      totalIncomplete={tasks.filter(task => !task.completed).length}
      totalComplete={tasks.filter(task => task.completed).length}
      />
      <form className="Search" onSubmit={this.addTask}>
        <Input 
        autoFocus
        primary 
        placeholder='search / add a todo!' 
        value={searchPhrase}
        onChange={this.handleChangeQuery}
        />
      </form>

      {
        tasks
          .filter(myTask => myTask.job.includes(searchPhrase))
          .map(myTask => 
            <Notification onClick={() => this.toggleComplete(myTask.key)} warning={!myTask.completed} success={myTask.completed}>
              <Delete onClick={stopPropagation(() => this.deleteTask(myTask.key))} />
              {myTask.job}
              <br />
              {myTask.dateTime}
            </Notification>)
      }
      </div>
    );
  }
}

export default App;

const stopPropagation = (fn) => (event) => {
  event.stopPropagation();
  if (fn) {
    fn(event);
  }
};