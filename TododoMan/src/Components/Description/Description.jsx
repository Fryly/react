import React from 'react'
import './Description.css'

function Description({ description, deadline }) {
    const res = [];
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ 
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
          '(\\#[-a-z\\d_]*)?$','i');
        let massStr = str.split(' ').map(item => {
            if(!!pattern.test(item)){
                res.push(<a href={item[0] !== 'h' ? `https://${item}` : `${item}`} key={res.length}>{item}</a>)
            }else{
                res.push(` ${item}`)
            }
            return item
        })
        return massStr
    }
    validURL(description)

    return (
        <ul className="Description">
            <li><span>Описание:</span>{res}</li>
            <li><span>Дедлайн:</span>{deadline}</li>
        </ul>
    )
}

export default Description
