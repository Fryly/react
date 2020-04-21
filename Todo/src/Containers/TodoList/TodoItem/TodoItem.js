import React from 'react'
import './Todoitem.css'
import imgDelete from './../../../assets/del.png'
import imgChenge from './../../../assets/pentwo.png'

export default props =>{

    const pClass = []
    
    if(props.addClass){
        pClass.push('active')
    }else{
        pClass.push('no-active')
    }

    return (
        <li
                             
        >
            <p
                className={pClass.join(' ')}
                onClick={props.clickActive}
            >
                {props.textTodo}
            </p>
            <div>  
                <img
                    onClick={props.onClickChange} 
                    src={imgChenge} 
                    alt ='#'
                />
                <img
                    onClick={props.onClickDelete} 
                    src={imgDelete} 
                    alt ='#'
                />
            </div>
        </li>
    )
}
