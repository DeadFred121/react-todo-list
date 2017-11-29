import React, { Component } from 'react';
import { Input, Notification } from 'reactbulma';
import Header from './components/Header';
import './App.css';

class App extends Component {

  // Set state for tasks
  state = {
    tasks: [
<<<<<<< HEAD
      { id: 1, job: 'Do the washing', dateTime: "29/11/2017, 14:03:33" },
      { id: 2, job: 'Walk the dog', dateTime: "29/11/2017, 14:04:51" }
=======
      { job: 'Do the washing', dateTime: "12/03/2017, 2:45:00 PM" },
      { job: 'Walk the dog', dateTime: "11/29/2017, 6:30:00 AM" }
>>>>>>> a1215b5459db8b0ecb351f7f8728e9fb13c2a736
    ],
    searchPhrase: ''
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
      currentTasks.unshift({ job: this.state.searchPhrase, dateTime: new Date().toLocaleString()});

        // Update the state with the new tasks
        this.setState({
          tasks: currentTasks,
          searchPhrase: ''
        });
      } 

    // Reset the search phrase to an empty string

  }

  // removeTask = (event) => {
  //   event.preventDefault();

  //   const currentTasks = [...this.state.tasks];

  //   currentTasks.shift();

  //   this.setState({
  //     tasks: currentTasks
  //   })
  // }

  // Render component
  render() {

    // Destructure props
    const {tasks, searchPhrase} = this.state

    return (
      <div className='App'>
      <Header 
      className="header"
      totalIncomplete={tasks.length} 
      title='INCOMPLETE' 
      />
      <form className="Search" onSubmit={this.addTask}>
        <Input 
        primary 
        placeholder='search / add a todo!' 
        value={searchPhrase}
        onChange={this.handleChangeQuery}
        />
      </form>

      {
        tasks
          .filter(myTask => myTask.job.includes(searchPhrase))
          .map(myTask => <Notification warning>{myTask.job}<br/>{myTask.dateTime}</Notification>)
      }

      </div>
    );
  }
}

export default App;
