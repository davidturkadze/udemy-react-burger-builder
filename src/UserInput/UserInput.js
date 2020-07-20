import React from 'react'

const userInput = (props) => {
    const inputStyle= {
        border: '2px solid red'
    }
    return <input
         onChange={props.changed} 
         style={inputStyle}
         type="text" 
         value={props.currentName} />
    
}

export default userInput