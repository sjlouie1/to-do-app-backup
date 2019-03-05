import React, { Component } from 'react';
import Form from './Form.js'
import Task from './Task.js'
import axios from 'axios';

class App extends Component {
 
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      time: '',
      tasks: [
      //   {
      //   name: "",
      //   time: ""
      // }
    ]
    }
  }


  handleClick = (event) => {
    // console.log('sample click')
    event.preventDefault();
      // console.log("this.state.tasks", this.state.tasks)
      // this.setState(prevState => ({
      //   tasks:[...prevState.tasks, {name: prevState.input, time: prevState.time
      //   }]}))
      const entry = {task: this.state.input, time: this.state.time};

      axios.post('localhost:8080/tasks', entry)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err));

      // fetch("http://localhost:8080/tasks", {
      //   method: 'POST',
      //   headers:{
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify(entry)
      // })
      // .then(response => response.json())
      // .then(result => console.log(result))
      // .catch(err => console.error(err))
  }

handleChangeInput = (entry) => {
    // const userInput = entry.target.value;
    this.setState({ input: entry.target.value });
    // console.log(this.state.input)
    console.log("entry.target.value", entry.target.value)
    console.log("entry.target", entry.target)
    // return userInput;
}

handleChangeTime = (entry) => {
  this.setState({time: entry.target.value});
  console.log("entry.target.value", entry.target.value)

}

componentDidMount(){ //does something immedietly on browser on load
  // fetch("http://localhost:8080/tasks")
  // .then(result => 
  //   result.json())
  // .then(jsonResult => {
  //   console.log(jsonResult)})
  //   // this.setState({tasks: jsonResult})
  // .catch(err => console.error(err))
  axios.get('localhost:8080/tasks')
  .then(response => {
    console.log(response);
    // this.setState({tasks: response};)
  })
};

  render() {
    console.log("hello")

    return ( 
      <div>
      <h1 className="title">
        To Do List
      </h1>
      <Form
        value={this.state.input}
        onSubmit = {this.handleClick} //props that are being passed to Form 
        onChange = {this.handleChangeInput}//refer to props.onChange in Form.js
        time ={this.handleChangeTime}
      />
    { 
      this.state.tasks.length > 0 && 
      <Task
        tasks={this.state.tasks} />
    }
      </div>
   
    );
  }
}

export default App;
