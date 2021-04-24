const initialState = {
    folder: [],
    isLoaded: false
}

const folders = ( state = initialState, action ) => {
    switch( action.type ) {
        case 'SET_FOLDERS':
            return {
                ...state,
                folder: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };

        case 'ADD_FOLDER':
            return {
                ...state,
                folder: [...state.folder, action.payload]
            };

        case 'DELETE_FOLDER':
            return {
                ...state,
                folder: action.payload
            }

        case 'ADD_TASK':
            const newTask = state.folder.map(item => {
                if(item.id === action.payload.id){
                  item.tasks = [...item.tasks, action.payload.task]
                }
                return item
            })
            return {
                ...state,
                folder: newTask
            }

        case 'DELETE_TASK':
            return {
                ...state,
                folder: action.payload
            }

        case 'COMPLITE_TASK':
            const newComnlit = state.folder.map((item) => {
                if(item.id === action.payload.id){
                  item.tasks = item.tasks.map( (task,curInd) => {
                      if(curInd === action.payload.index){
                        task.completed = !action.payload.complite
                      }
                      return task
                  })
                }
                return item
              })
            return {
                ...state,
                folder: newComnlit
            }    

        case 'EDIT_TITLE':
            const newTitle = state.folder.map(item => {
                if(item.id === action.payload.id){
                    item.name = action.payload.name
                }
                return item
            })
            return {
                ...state,
                folder: newTitle
            };

        case 'EDIT_TASK':
            const editTask = state.folder.map( item => {
                if(item.id === action.payload.id){
                    item.tasks = item.tasks.map( (task, curInd) => {
                    if(curInd === action.payload.index){
                        task = action.payload.task
                    }
                    return task
                    })
                }
                return item
            })
            return {
                ...state,
                folder: editTask
            };

        default:
            return state;
    }
};


export default folders