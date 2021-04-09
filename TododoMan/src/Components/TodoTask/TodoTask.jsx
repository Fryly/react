import React from 'react'
import './TodoTask.css'

import { Route, Switch} from 'react-router-dom'
import { NotTodo, Task, FullTask } from '../index';

function TodoTask( {items, handleEditText, handleDeleteTask, handleCompliteTask, handleAddTask} ) {
    return (
        <div className="Todo-task">
            <>
                {
                    items.length === 0
                        ? <NotTodo/>
                        : null
                }
            </>
            <Route path='/main/fulltask'>
                {
                    items.map((item, _) => (
                        <FullTask
                            key={item.id}
                            todos={item}
                            id={item.id}
                            handleDelete={handleDeleteTask}
                            handleComplite={handleCompliteTask}
                        />
                    ))
                }
            </Route>
            <Switch>
                <Route path='/main/list/:id'>
                    <Task 
                        item={items} 
                        handleEdit={handleEditText}
                        handleDelete={handleDeleteTask}
                        handleComplite={handleCompliteTask}
                        handleAdd={handleAddTask}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default TodoTask
