import React from 'react'

const cockpit = (props) => {
    return (
        <div>
            <h1> this is the first react guide </h1>
            <button onClick={props.toggled}>Toggle Person</button>
        </div>
)}

export default cockpit;