import { useDispatch } from 'react-redux'
import { deleteTask, setReminder } from '../redux/action'

function Task({ task }) {
    const dispatch = useDispatch()
    return(
        <div 
        className={task.reminder? "task reminder": "task"}
        onDoubleClick={() => dispatch(setReminder(task.id))}>
            <h3>
                {task.text}
                <h3 style={{
                    color: 'red'
                }}
                onClick={() => dispatch(deleteTask(task.id))}>&times;</h3>
            </h3>
            <small>{task.day}</small>
        </div>
    )
}

export default Task