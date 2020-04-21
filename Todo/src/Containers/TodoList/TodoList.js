import React, { Component } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem/TodoItem'
import Announcing from '../../Components/Announcing/Announcing'
import TodoCreator from '../TodoCreator/TodoCreator'
import { CSSTransitionGroup } from 'react-transition-group'


export default class Content extends Component {
    state = {
        isAnnouncing: false,
        todoTitle: 'TodoList',
        input: '',
        todo: [
            { addClass: false, text : 'buy mouse'},
            { addClass: false, text : 'buy oclock'},
            { addClass: false, text : 'buy ocl'},
            { addClass: false, text : 'buy'},
        ]
    }
    onClickTextHandler = (index,addClass) => {
        const i = this.state.todo[index];
        i.addClass = !addClass
        const todo = [...this.state.todo]
        todo[index] = i 
        this.setState({todo})
    }

    onDeleteHandler = (index) => {
        const todo = [...this.state.todo]
        todo.splice(index, 1)
        this.setState({todo})
    }

    onChangeTodo = (index, text) => {
        const i = this.state.todo[index];
        i.text = prompt('Исправьте текст',text)
        const todo = [...this.state.todo]
        todo[i] = i
        this.setState({todo})
    }

    onAnnouncingHandler = () => {
        this.setState({
            isAnnouncing: true,
            input:''
        })
        this.state.todo.push({
            addClass: false,
            text:this.state.input
        })
        if (!this.isAnnouncing){
            window.setTimeout( () => {
                this.setState({
                    isAnnouncing: false,
                })
            },2400)
        }

    }

    onInputAdd = (newText) => {
        this.setState({
            input: newText
        })
    }

    render(){
    return(
            <div className='TodoList'>
                {
                    this.state.isAnnouncing ? <Announcing/> : null 
                }
                <TodoCreator
                    onAnnouncing={this.onAnnouncingHandler}
                    onAddInput={(eventsOnInput) => this.onInputAdd(eventsOnInput.target.value)}
                    textValue={this.state.input}
                />
                <h1>{this.state.todoTitle}</h1>
                
                    <ul>
                        <CSSTransitionGroup transitionName='example'>
                        {
                            this.state.todo.map((textItem, index) => {
                                return(
                                    <TodoItem
                                        key={index}
                                        addClass={textItem.addClass}
                                        textTodo={textItem.text}
                                        onClickDelete={this.onDeleteHandler.bind(this,index)}
                                        onClickChange={() => this.onChangeTodo(index, textItem.text)}
                                        clickActive={() => this.onClickTextHandler(index,textItem.addClass)}
                                        // classActive={props.activeClass}
                                    />
                                )
                            }
                            )
                        }
                        </CSSTransitionGroup>
                    </ul>
                
            </div>
    )
}
}