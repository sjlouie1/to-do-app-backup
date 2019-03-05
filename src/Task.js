import React, {Component} from 'react';

const Task = props => {

    {var key= 0}
    
  return(
        <div>
                <ol>
                    {props.tasks.map(entry => {
                        return(
                            <div>
                                 <li key={key++}>{entry.name} {entry.time}</li> 
                            </div>
                        )
                    })
                }
                </ol>
        </div>
    )

};

export default Task  

