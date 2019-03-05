import React, { Component } from 'react';
import Alert from './Alert.js'

// export default class Form extends React.Component { //stateful component

const Form = props => {
    return (
        <div>
        <form method="POST" action="/">
            <input name="task" type="text" onChange = {props.onChange}  placeholder="Type your task" /><br></br>
            <input name="time" type="time" onChange = {props.time} /> 

        {/* <Alert onChange={props.handleChangeInput} />    */}
        <button onClick={props.onSubmit} >Submit</button>
        
        </form>
        </div>
        
            )
}

export default Form;

// render(){
    

//     return (
// <div>
// <form>
//     <input name="task" type="text" value={this.props.input} onChange = {this.handleChangeInput}  placeholder="Type your task" /><br></br>
//     {/* how to access 'name' from input tag? */}
    
//     <Alert />    
    
//     <button onClick={this.handleClick} >Submit</button>

// </form>
//  <Task item={this.props.form} />
// </div>

//     )
// }

// }

