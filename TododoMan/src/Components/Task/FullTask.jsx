import React from 'react'
import './Task.css'

import StandardView from './StandardView'
import Select from '../Select/Select'
import Table from '../Table/Table'


function FullTask({ items, handleDelete, handleComplite, handleEdit }) {

    const [select, setSelect] = React.useState("Обычный");
    const [openSelect, setOpenSelect] = React.useState(false);

    const handleClickSelect = ( select ) => {
        setSelect(select)
        setOpenSelect(!openSelect)
    }

    const handleOpenSelect = () => {
        setOpenSelect(!openSelect)
    }

    return (
        <div className="Full-task">
            <Select
                select={select}
                openSelect={openSelect}
                handleClickSelect={handleClickSelect}
                handleOpenSelect={handleOpenSelect}
            />
            {
                select === "Обычный"
                ? items.map((item, _) => (
                    <StandardView
                        key={item.id}
                        todos={item}
                        id={item.id}
                        handleDelete={handleDelete}
                        handleComplite={handleComplite}
                        handleEdit={handleEdit}
                    />
                ))
                : <Table
                    items={items}
                  />
            }
        </div>
    )
}

export default FullTask
