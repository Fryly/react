import React from 'react'
import './Task.css'
import classNames from 'classnames';
import { TaskItem } from '../index';

function FullTask({todos, handleDelete, handleComplite, id}) {

    const onDelete= (index) => {
        handleDelete(id,index)
    }

    const onComplite = (index,complite) => {
        handleComplite(id,index,complite)
    }

    return (
        <div className="Task Full-task">
            <h1 
                className={classNames('Title', { [`Title--${todos.colorName}`]: todos.colorName })}
            >
                {todos.name}
            </h1>
            <div className="Border"></div>
                {
                    todos.length === 0
                        ? []
                        : <TaskItem
                            items={todos.tasks}
                            onClickCompleted={onComplite}
                            onClickDelete={onDelete}
                          />
                }
        </div>
    )
}

export default FullTask
