import React from 'react';
import List from './list/List'
import './Nav.css';


class Nav extends React.Component {
    state = {
        list : [
            {listText:'профиль'},
            {listText:'сообщения'},
            {listText:'новости'},
            {listText:'настройки'}
        ]
    }
    render(){
        return (
        <nav className='Menu'>
            <ul className='Menu-list'>
                {
                    this.state.list.map((listIter,listIndex)=>{
                        return (<List
                            key = {listIndex}
                            nameList = {
                                listIter.listText
                            }
                        />)
                    })
                }
            </ul>
        </nav>
        )
    }
}

export default Nav;