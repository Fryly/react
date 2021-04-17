import React from 'react'
import './Description.css'

function Description({ description, deadline }) {
    const res = []
    const pattern = /((?:https?:\/\/|ftps?:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,})|(\n+|(?:(?!(?:https?:\/\/|ftp:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,}).)+)(([a-z\-]+))/gim;

    description && description.replace(pattern, (_, link, text) => {
        console.log(link, text)
        res.push(link ? <a href={(link[0]==="w" ? "https://" : "") + link} key={res.length}>{link}</a> : text)
    })

    
    return (
        <ul className="Description">
            <li><span>Описание:</span> {res}</li>
            <li><span>Дедлайн:</span> {deadline}</li>
        </ul>
    )
}

export default Description
