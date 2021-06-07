import axios from 'axios'

export const setEvents = ( events, todoEvents ) => ({
    type: 'SET_EVENTS',
    payload: {
        events,
        todoEvents
    }
})

export const setTodoEvents = ( events ) => ({
    type: 'SET_TODO_EVENTS',
    payload: events
})

export const addEvent = ( event ) => ({
    type: 'ADD_EVENT',
    payload: event
})


export const featchEvents = ( url, todoEvents ) => ( dispatch ) => {
    axios.get(url)
        .then(({data}) => {
            dispatch( setEvents(data.events, todoEvents) )
        })
}

export const featchAddEvent = ( url, event ) => ( dispatch ) => {
    axios.put(url, event)
         .then(({data}) => {
            dispatch(addEvent(event))
        })
}