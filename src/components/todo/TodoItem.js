import React from 'react'

export const TodoItem = (props) => {
    const handleToggle = props.handleToggle.bind(null, props.id)
    return (
        <li>
            <input type="checkbox" onChange={handleToggle} 
            checked={props.isComplete}/> {props.name}
        </li>
    )
}

TodoItem.proptypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired
}