import React from 'react';
import TextArea from './TextArea/TextArea'
import Contentinfo from './Contentinfo/Contentinfo';

class  Bio extends React.Component {
    state = {
        pageTitle:'Мои посты'
    }
    hendlerChangeTitle = (newTitle) => {
        this.setState({
            pageTitle : newTitle
          }) 
    }
    render (){
        return (
            <div className='Bio'>
                <Contentinfo/>             
                <TextArea 
                    pageTitle={this.state.pageTitle}
                    changeTitle={this.hendlerChangeTitle.bind(this,`Спасибо`)}
                />
            </div>
        )
    }
}

  export default Bio;