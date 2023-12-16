import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskName: '',
      assigning: '',
      startDate: '',
      endDate: '',
      priority: 'Low',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { taskName, assigning, startDate, endDate, priority } = this.state;
    const newTask = {
      taskName,
      assigning,
      startDate,
      endDate,
      priority,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      taskName: '',
      assigning: '',
      startDate: '',
      endDate: '',
      priority: 'Low',
    }));
  };

  render() {
    const { taskName, assigning, startDate, endDate, priority, tasks } = this.state;

    return (
      <div>
        <h1><center>TODO APP</center></h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Task Name"
            name="taskName"
            value={taskName}
            onChange={this.handleInputChange}
            required
          />
          <select name="assigning" value={assigning} onChange={this.handleInputChange} required>
            <option value="">Assiging</option>
            <option value="Anjali">Anjali</option>
            <option value="Vinsha">Vinsha</option>
            <option value="Nandana">Nandana</option>
            <option value="Nihala">Nihala</option>
            <option value="Akhil">Akhil</option>

          </select>
          <input
            type="date"
            placeholder="Start Date"
            name="startDate"
            value={startDate}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="date"
            placeholder="End Date"
            name="endDate"
            value={endDate}
            onChange={this.handleInputChange}
            required
          />
          <select name="priority" value={priority} onChange={this.handleInputChange} required>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit">Add Task</button>
        </form><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<center>
        <table border={2}>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Assigning</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.taskName}</td>
                <td>{task.assigning}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.priority}</td>
              </tr>
            ))}
          </tbody>
        </table></center>
      </div>
    );
  }
}

export default TodoApp;
