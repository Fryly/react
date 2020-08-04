import React from 'react';
import Avatar from '../Avatar/Avatar'
import UserInfo from '../UserInfo/UserInfo'

class Contentinfo extends React.Component {
    state = {
        profle: [
            {
                Name: 'Луффи',
                Data: '31.03.2019',
                City: 'Gomel',
                Aducation: 'ГГУ',
                Url: 'https://vk.com/sad123234'
            }
        ]
    }
    render(){
    const profle = this.state.profle;
    return (
        <div className='Content-info'>
            <Avatar />
            <UserInfo 
                name={profle[0].Name}
                date={profle[0].Data}
                city={profle[0].City}
                aducation={profle[0].Aducation}
                url={profle[0].Url}
            />
        </div>              
    )
    }
}

export default Contentinfo;