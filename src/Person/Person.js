import React from 'react'

import classes from './Person.css'


const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/* outputs what is between component tag (works like slots in Vue.js) */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person