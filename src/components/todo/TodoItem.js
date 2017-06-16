import React from 'react'

export const TodoItem = (props) => {
    return (
        <li>
            <input type="checkbox" defaultChecked={props.isComplete}/> {props.name}
        </li>
    )
}

TodoItem.proptypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired
}