import { useState, useRef, useEffect } from 'react'



export const useModal = ( initialState ) => {

    const [visiblePopupTask, setPopupTask] = useState(false)
    const [form, setForm] = useState( initialState )
    const ModalRef = useRef();

    const handleInputChange = (event) =>{
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(ModalRef.current)){
            setPopupTask(false)
        }
    }

    const handleVisiblePopupTask = () => {
        setPopupTask(!visiblePopupTask)
    }

    useEffect( () => {
        document.body.addEventListener('click', handleOutsideClick)
    },[]);


    return { 
                handleInputChange, 
                handleVisiblePopupTask, 
                form,
                setForm,
                ModalRef,
                visiblePopupTask,
                setPopupTask  
            }
}