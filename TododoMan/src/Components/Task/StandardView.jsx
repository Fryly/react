import React from 'react'

import classNames from 'classnames';
import { TaskItem } from '../index';
import './Task.css'

function StandardView({ handleDelete, handleComplite, handleEdit, id, todos }) {


    const onDelete= (index) => {
        handleDelete(id,index)
    }

    const onComplite = (index,complite) => {
        handleComplite(id,index,complite)
    }

    const onEdit = (obj, index) => {
        handleEdit(obj, index, id)
    }


    return (
        <div className="Standard-view">
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
                            onClickEdit={onEdit}
                          />
                }
        </div>
    )
}

export default StandardView
