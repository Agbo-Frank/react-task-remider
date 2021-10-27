import Task from "./Task"
import { useSelector } from 'react-redux'

function Tasks() {

    const tasks = useSelector(state => state.tasks)
    return(
        <>
           { tasks.map(task => (
                <Task task={task} key={task.id}/>
            ))}
        </>
    )
        
}

export default Tasks