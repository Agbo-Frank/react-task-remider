import { useState } from "react"
import { useDispatch } from "react-redux"
import { submit } from '../redux/action'

function Form(){
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const dispatch = useDispatch() 

    function onAdd(e){
        e.preventDefault()

        var doc ={
            text, day, reminder
        }

        dispatch(submit(doc))

        setText('')
        setDay('')
        setReminder(false)
    }
    return(
        <form className="add-form" onSubmit={(e) => onAdd(e)}>
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Add Task" 
                value={ text } 
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Add Task" 
                value={ day } 
                onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                type="checkbox" 
                value={ reminder } 
                onChange={(e) => setReminder(e.target.checked)}/>
            </div>

            <button className="btn btn-block">Submit</button>
        </form>
    )
}

export default Form