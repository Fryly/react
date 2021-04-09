import React from 'react'
import './Task.css'

import Add from './../../assets/plus.png'
import Edit from '../../assets/repeir.png'

import { useParams } from 'react-router-dom'
import { Button, PopupTask, TaskItem } from '../index';
import classNames from 'classnames';


function Task({item, handleEdit, handleDelete, handleComplite, handleAdd}) {

    const [visiblePopupTask, setPopupTask] = React.useState(false)

    let { id } = useParams();
    let tasks = find(parseInt(id));
    let taskItems = tasks.tasks

    const handleVisiblePopupTask = () => {
        setPopupTask(!visiblePopupTask)
    }


    const onAdd = (newTask) => {
        const obj = {
            text: newTask,
            completed: false  
        }
        handleAdd(tasks.id,obj)
    }
    
    const onDelete= (index) => {
        handleDelete(tasks.id,index)
    }

    const onComplite = (index,complite) => {
        handleComplite(tasks.id,index,complite)
    }

    const onClickEdit = () => {
        const title = prompt('Исправить заголовок')
        if(title){
            handleEdit(tasks.id,title)
        }
    }

    function find(id) {
        return item.find(p => p.id === id);
    }
    return (
        <div className="Task">
            <h1 
                className={classNames('Title', { [`Title--${tasks.colorName}`]: tasks.colorName })}
                onClick={onClickEdit}
            >
                {tasks.name}
                <img src={Edit} alt="edit"/>
            </h1>
            <div className="Border"></div>
                {
                    taskItems.length === 0
                        ? []
                        : <TaskItem
                            items={taskItems}
                            onClickCompleted={onComplite}
                            onClickDelete={onDelete}
                          />
                }
                {
                    visiblePopupTask 
                        ?   <PopupTask 
                                onClickClose={handleVisiblePopupTask}
                                onAddTask={onAdd}
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
