import React from 'react'
import './Task.css'

import Add from './../../assets/plus.png'
import Edit from '../../assets/repeir.png'

import { useParams } from 'react-router-dom'
import { Button, ModalTask, TaskItem } from '../index';
import classNames from 'classnames';


function Task({item, handleEdit, handleDelete, handleComplite, handleAdd, handleEditTask}) {

    const [visiblePopupTask, setPopupTask] = React.useState(false)
    const [form, setForm] = React.useState({
        text: '',
        description: '',
        deadline: '',
        completed: false  
    })

    let { id } = useParams();
    let tasks = find(parseInt(id));
    let taskItems = tasks.tasks
    const ModalRef = React.useRef();

    const handleVisiblePopupTask = () => {
        setPopupTask(!visiblePopupTask)
    }


    const onAdd = () => {
        setForm({
            text: '',
            description: '',
            deadline: ''
        })
        handleAdd(tasks.id,form)
    }

    const handleInputChange = (event) =>{
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    
    const onDelete = (index) => {
        handleDelete(tasks.id,index)
    }

    const onComplite = (index,complite) => {
        handleComplite(tasks.id,index,complite)
    }

    const onClickEdit = (text) => {
        const title = prompt('Исправить заголовок(не больше 10 символов)', text) 

        if( title === null || title.length > 10){
            alert('Заголовок не изменен')
        }else{
            alert(`Заголовок изменен на ${title}`)
            handleEdit(tasks.id,title)
        }
    }

    const onEdit = (obj, index) => {
        handleEditTask(obj, index, tasks.id)
    }

    function find(id) {
        return item.find(p => p.id === id);
    }

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(ModalRef.current)){
            setPopupTask(false)
        }
    }

    React.useEffect( () => {
        document.body.addEventListener('click', handleOutsideClick)
    },[]);

    return (
        <div className="Task">
            <h1 
                className={classNames('Title', { [`Title--${tasks.colorName}`]: tasks.colorName })}
            >
                {tasks.name}
                <img onClick={() => onClickEdit(tasks.name)} src={Edit} alt="edit"/>
            </h1>
            <div className="Border"></div>
                {
                    taskItems.length === 0
                        ? []
                        : <TaskItem
                            items={taskItems}
                            onClickCompleted={onComplite}
                            onClickDelete={onDelete}
                            onClickEdit={onEdit}
                          />
                }
                {
                    visiblePopupTask 
                        ?   <ModalTask
                                onClickClose={handleVisiblePopupTask}
                                onAddTask={onAdd}
                                handleInputChange={handleInputChange}
                                ModalRef={ModalRef}
                                text={form.text}
                                description={form.description}
                                deadline={form.deadline}
                                nameText='Добавить задачу'
                            />
                        :   <Button className="Button-open" onClick={handleVisiblePopupTask}>
                                <img src={Add} alt="ADD"/> 
                                Добавить задачу
                            </Button>
                }
        </div>
    )
}

export default Task
