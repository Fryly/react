import React from 'react';

export default props => {
    return (
      <div className='User-info'>
            <ul className='User-list-info'>
                <li><h1>{props.name}</h1></li>
                <li>родился: <strong>{props.date}</strong></li>
                <li>город: <strong>{props.city}</strong></li>
                <li>образование: <strong>{props.aducation}</strong></li>
                <li>сайт: <a href='{props.url}'>{props.url}</a></li>
            </ul>
      </div>
  
    );
  }
