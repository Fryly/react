import React from 'react';

export default props => {
    return (
      <div className='Text-area'>
           <h3>{props.pageTitle}</h3>
           <textarea >
             Что у вас нового?
           </textarea>
           <button onClick={props.changeTitle}>Отправить</button>
      </div>
  
    );
  }

