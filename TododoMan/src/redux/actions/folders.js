import axios from 'axios'

export const setLoaded = ( payload ) => ({
    type: 'SET_LOADED',
    payload,
})

export const setFolder = ( folders ) => ({
    type: 'SET_FOLDERS',
    payload: folders
})

export const addFolder = ( folder ) => ({
    type: 'ADD_FOLDER',
    payload: folder
})

export const deleteFolder = ( newFolder ) => ({
    type: 'DELETE_FOLDER',
    payload: newFolder
})

export const addTask = ( id, task ) => ({
    type: 'ADD_TASK',
    payload: {
        id,
        task
    }
})

export const deleteTask = ( task ) => ({
    type: 'DELETE_TASK',
    payload: task
})

export const compliteTask = ( id, index, complite ) => ({
    type: 'COMPLITE_TASK',
    payload: {
        id,
        index,
        complite
    }
})

export const editTask = ( task, index, id ) => ({
    type: 'EDIT_TASK',
    payload: {
        id,
        index,
        task
    }
})

export const editTitle = ( id, name ) => ({
    type: 'EDIT_TITLE',
    payload: {
        id,
        name,
    }
})

export const featchFolders = ( url ) => ( dispatch ) => {
    dispatch( setLoaded(false) )
    axios.get(url)
        .then(({data}) => {
            dispatch( setFolder(data.folders) )
        })
}

export const featchAddFolders = ( url, folder ) => ( dispatch ) => {
    axios.put(url, folder)
         .then(({data}) => {
            dispatch(addFolder(folder))
        })
}

export const featchDeleteFolders = ( url, newFolder, hist ) => ( dispatch ) => {
    axios.put(url, newFolder)
         .then(({data}) => {
            dispatch(deleteFolder(newFolder))
            hist.push('/main')
        })
}

export const featchEditTitle = ( url, ids, name ) => ( dispatch ) => {
        axios.patch(url, {ids, name})
             .then(({data}) => {
                dispatch(editTitle( ids, name ))
            })
}

export const featchAddTask = ( url, ids, obj ) => ( dispatch ) => {
    axios.put(url, {obj, ids})
         .then(({data}) => {
            dispatch(addTask( ids, obj ))
        })
}

export const featchDeleteTask = ( url, ids, newTask ) => ( dispatch ) => {
      axios.put(url, {newTask, ids})
           .then(({data}) => {
                dispatch(deleteTask( newTask ))
            })
}

export const featchEditTask = ( url, obj, index, ids ) => ( dispatch ) => {
    axios.put(url, {ids, obj, index})
         .then(({data}) => {
            dispatch(editTask( obj, index, ids ))
        })
}