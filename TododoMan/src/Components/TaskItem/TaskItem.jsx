import React from 'react'
import './TaskItem.css'
import Del from '../../assets/del.png'

function TaskItem({items, onClickDelete, onClickCompleted}) {

    return (
        <div className="Task-item">
            <ul>
                {
                    items.map((item,index)=>(
                            <li
                                key={index}
                                onClick={()=>{onClickCompleted(index,item.completed)}}
                                className={item.completed ? "Complited-text" : ''}
                            >
                                <div className="checkbox">
                                    <input
                                        readOnly
                                        type="checkbox"
                                        checked={item.completed ? true : false}
                                    />
                                    <label>
                                    <svg 
                                        width="11"
                                        height="8"
                                        viewBox="0 0 11 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                                        stroke="#000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                    </svg>
                                    </label>
                                </div>
                                {item.text}
                                <img src={Del} alt="del" 
                                    onClick={() => {onClickDelete(index)}}
                                />
                            </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskItem
