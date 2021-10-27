export function deleteTask(id){
    return function (dispatch){
        fetch(`http://localhost:5000/task/${id}`, {method: 'DELETE'})
         .then(() => {
            dispatch({
                type: 'DELETE_TASK',
                payload: id
            })
         })
    }
}
export function setReminder(id){
    return function(dispatch){
        fetch(`http://localhost:5000/task/${id}`)
        .then(res => res.json())
        .then(data => {
            var doc = {...data, reminder: !data.reminder}
            fetch(`http://localhost:5000/task/${id}`, {
                method: 'PUT',
                body: JSON.stringify(doc),
                headers: {"Content-Type": "application/json"}
            }).then(() => {
                dispatch({
                    type: 'SET_REMINDER',
                    payload: id
                })
            })
            
        })
    }
}
export function submit(doc){
    return function (dispatch){
        fetch(`http://localhost:5000/task/`, {
            method: 'POST',
            body: JSON.stringify(doc),
            headers: {"Content-Type": "application/json"}
        }).then(() => {
            dispatch({
                type: 'NEW_TASK',
                payload: doc
            })
        })
    }
}
export function fetchedData(){
    return function(dispatch){
    fetch('http://localhost:5000/task')
             .then(res => res.json())
             .then(data => {
                 dispatch({
                    type: 'FETCH_DATA',
                    payload: data
                })
             })
    }         
}