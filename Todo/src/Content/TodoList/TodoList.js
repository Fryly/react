import React, { Component } from 'react'
import './TodoList.css'
import imgDelete from './../../assets/del.png'


export default class QuizList extends Component {
    render(){
        return(
            <div className='TodoList'>
                <h1>TodoList</h1>
                <ul>
                    <li>
                        buy mouse
                        <img 
                            src={imgDelete} 
                            alt ='#'
                        />
                    </li>
                </ul>
            </div>
        )
    }
}