import React, { useState } from 'react';
import './Sort.css';

const Sort = React.memo( ({ items, onClickSortType, activeSortType}) => {
        const [visibleSort,setVisibleSort] = useState(false);
        const sortRef = React.useRef();
        const activeLabel = items.find((obj) => obj.type === activeSortType).name;
        
    
        const onSelectItem = (type) => {
            onClickSortType(type)
            setVisibleSort(false)
        }
    
        const toggleClick = () => {
            setVisibleSort(!visibleSort)
        }
    
        const handleOutsideClick = (e) => {
            if (!e.path.includes(sortRef.current)){
                setVisibleSort(false)
            }
        }
    
        React.useEffect( () => {
            document.body.addEventListener('click', handleOutsideClick)
        },[]);
    
        return (
            <div ref={sortRef} className="Sort">
                <div className="Label">
                    <p>Сортировка по:</p>
                    <span onClick={toggleClick}>{activeLabel}</span>
                </div>
                { 
                    <div className="Sort__popup">
                    <ul>
                        { visibleSort &&
                            items &&
                            items.map((obj,index) => (
                                <li
                                className={activeSortType === obj.type ? 'Active' : ''}
                                key={` ${obj.type}_${index} `}
                                onClick={() => { onSelectItem(obj) }}
                                >
                                {obj.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                }
            </div>
        )
    }
)

export default Sort