import React, {Component} from 'react'
import classesName from './Layout.css'
import Header from '../Components/Header/Header'
import TodoList from './../Containers/TodoList/TodoList'


export default class Layout extends Component {
    render(){
        return(
            <div className={classesName.Layout}>
                <Header Text='To-do'/>
                <TodoList>
                    {this.props.children}
                </TodoList>
            </div>

        )
    }
}