import React, { Component } from 'react'
import './Content.css'
import Announcing from './Announcing/Announcing'
import TodoCreator from './TodoCreator/TodoCreator'
import TodoList from './TodoList/TodoList'

export default class QuizList extends Component {
    render(){
        return (
            <div className='Content'>
                <Announcing/>
                <TodoCreator/>
                <TodoList/>
            </div>
        )
    }
}