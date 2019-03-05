import React, { Component } from 'react';

const Alert = props => {

        return(
            <div>
                    <input name="alert-time" type="time" onChange={props.onChange} /> 
            </div>
        )
}

export default Alert;