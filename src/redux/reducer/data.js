const initialState = {
    tasks: []
}

const data = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_DATA': {
            return {
                ...state,
                tasks: action.payload
            }
        }
        case 'DELETE_TASK': {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        }
        case 'SET_REMINDER': {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return  task.id === action.payload? {...task, reminder: !task.reminder}: {...task}
                })
            }
        }
        case 'NEW_TASK': {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default data