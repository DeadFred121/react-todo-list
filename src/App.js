import React, { Component } from 'react';
import { Input, Notification } from 'reactbulma';
import Header from './components/Header';
import './App.css';

class App extends Component {

  // Set state for tasks
  state = {
    tasks: ['Do the washing', 'Walk the dog'],
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


    if (this.state.searchPhrase !== '' && !this.state.tasks.includes(this.state.searchPhrase)) {
        // Add new tasks to list of tasks
        currentTasks.unshift(this.state.searchPhrase);

        // Update the state with the new tasks
        this.setState({
          tasks: currentTasks,
          searchPhrase: ''
        });
      }

    // Reset the search phrase to an empty string

  }

  // Render component
  render() {

    // Destructure props
    const {tasks, searchPhrase} = this.state

    return (
      <div className='App'>
      <Header 
      totalIncomplete={tasks.length} 
      title='INCOMPLETE' 
      />
      <form onSubmit={this.addTask}>
        <Input 
        primary 
        placeholder='search / add a todo!' 
        value={searchPhrase}
        onChange={this.handleChangeQuery}
        />
      </form>

      {
        tasks
          .filter(myTask => myTask.includes(searchPhrase))
          .map(myTask => <Notification warning>{myTask}</Notification>)
      }

      </div>
    );
  }
}

export default App;
