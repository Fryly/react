import axios from 'axios'

export const setColor = ( color ) => ({
    type: 'SET_COLOR',
    payload: color
})

export const featchColor = ( ) => ( dispatch ) => {
    axios.get('http://localhost:3001/colors').then(({data}) => {
        dispatch(setColor(data[0].colors))
    })
}



