import React from 'react';
import './Announcing.css'
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';


export default props => {
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
    return (
        <Bounce>
            <div className='Announcing'>
            <p className='Text-announcing'> Success! Entity creared </p>
            </div>
        </Bounce>
    )
}

