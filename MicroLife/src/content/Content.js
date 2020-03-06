import React from 'react';
import Bgprofile from './Bgprofile/Bgprofile';
import Bio from './Bio/Bio'
import './Content.css';

class Content extends React.Component {
    
    render () {
        
        return (
            <div className='Content'>
                <Bgprofile/>
                <Bio/>
            </div>
        )
    }
}

export default Content;