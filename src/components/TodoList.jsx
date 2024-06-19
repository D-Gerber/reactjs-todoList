import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and vegetables',
        'Pick up kids from school'
    ]

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <li className='todoItem' key={todoIndex}>
                        {todo}
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </li>
                )
            })}
        </ul>
    )
}
