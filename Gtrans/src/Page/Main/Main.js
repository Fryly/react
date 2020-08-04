import React from 'react'
import './Main.css'
import News from '../../Component/News/News'
 
function Main() {
    return (
        <div className="Main">
            <h2>Новости</h2>
            <div className="Content_News">
                <News/>
            </div>
        </div>
    )
}



export default Main