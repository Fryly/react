import React from 'react'
import './TodoTask.css'

import { Route, Switch } from 'react-router-dom'
import { NotTodo, Task, FullTask } from '../index';
import CalendarEvent from '../Calendar/CalendarEvent';

function TodoTask( {items, handleEditText, handleDeleteTask, handleCompliteTask, handleAddTask, handleEditTask} ) {

    const getTodoEvents = () => {
       let eventTask = []
       items.map( item  => 
            item.tasks.map( curItm => 
                eventTask.push ({
                    color: item.colorName,
                    title: curItm.text,
                    date: curItm.deadline
                })
            )
        )
        return eventTask
    }

    return (
        <div className="Todo-task">
            <>
                {
                    items.length === 0
                        ? <NotTodo/>
                        : null
                }
            </>
           
            <Switch>
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
                <Route path='/main/list/:id'>
                    <Task 
                        item={items}
                        handleEdit={handleEditText}
                        handleDelete={handleDeleteTask}
                        handleComplite={handleCompliteTask}
                        handleAdd={handleAddTask}
                        handleEditTask={handleEditTask}
                    />
                </Route>
                <Route path='/main/calendar'>
                    <CalendarEvent 
                        item={getTodoEvents()}
                    />
                </Route>
            </Switch>
           
        </div>
    )
}

export default TodoTask
