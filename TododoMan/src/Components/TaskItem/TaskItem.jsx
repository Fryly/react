import React, { useState } from 'react'
import './TaskItem.css'
import Del from '../../assets/del.png'
import Rep from '../../assets/repeir.png'
import { ModalTask} from '../index';
import { useModal } from '../../hooks/modal.hook'
import Description from '../Description/Description'
import { buttonName } from '../Util/Constants'

function TaskItem({ items, onClickDelete, onClickCompleted, onClickEdit }) {

    const [openDescription, setDescription] = useState([])
    const [i, setI] = useState(null)
    const { 
        handleInputChange,  
        form,
        setForm, 
        ModalRef, 
        visiblePopupTask, 
        setPopupTask 
      } = useModal({ text: '', description: '', deadline: '', completed: false });

    const handleClickModal = (text, description, deadline, index) => {
        setForm({
            text,
            description,
            deadline,
        })
        setI(index)
        setPopupTask(!visiblePopupTask)
    }

    const handleClickEdit = () => {
        alert(`Задача была отредактирована`)
        onClickEdit(form, i)
        setPopupTask(false)
    }

    const handleClickDescription = (name) => { 
        setDescription([...openDescription, name])
        if ( openDescription.includes(name) ){
            let open = openDescription.filter(item =>  item !== name );
            setDescription(open)
        }
    }

    return (
        <div className="Task-block">
                {
                    items.map((item,index)=>(
                            <div
                                key={index}
                                className="Task-item"
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
                                    <span 
                                        className={item.completed ? "Complited-text" : ""}
                                        onClick={() => {onClickCompleted(index,item.completed)}}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                                <div className="Task-item__tools">
                                    <img src={Rep} alt="rep"
                                        onClick={() => handleClickModal(item.text, item.description, item.deadline, index)}
                                    />
                                    
                                    <img className="del" src={Del} alt="del" 
                                        onClick={() => onClickDelete(index)}
                                    />
                                </div>
                                <div className="Task-item__description">
                                    <span className="description-text" onClick={() => handleClickDescription(item.text)}>Подробнее</span>
                                    {
                                        openDescription.includes(item.text) 
                                        ?
                                            <Description 
                                                description={item.description}
                                                deadline={item.deadline}
                                            />
                                        : null
                                    }
                                </div>
                            </div>
                    ))
                }
                {
                    visiblePopupTask &&
                        <ModalTask 
                            onClickClose={handleClickModal}
                            ModalRef={ModalRef}
                            nameText={buttonName.changeTask}
                            handleInputChange={handleInputChange}
                            text={form.text}
                            description={form.description}
                            deadline={form.deadline}
                            onAddTask={handleClickEdit}
                        />
                }
        </div>
        
    )
}

export default TaskItem
