import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditTodoForm } from './EditTodoForm'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'


export const Todo =  ({task, toggleComplete,deleteTodo, editTodo }) => {
    return (
        <div className = 'Todo'>
            <p onClick={()=> toggleComplete (task.id)} className=
            {`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} 
                onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onclick={()=> deleteTodo(task.id)} />
            </div>
        </div>
    )
}

// dur 28:43