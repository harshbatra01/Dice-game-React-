import { useState } from 'react';
import styled from 'styled-components';

const RollDice = ({currentDice, randomNumberGenerator}) => {


    

    return <DiceContainer>
        <div><img onClick={randomNumberGenerator} src={`/images/dice_${currentDice}.png`}></img></div>
        <p>Click on dice to roll</p>
    </DiceContainer>
}

export default RollDice;

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 8x;

img{
    cursor: pointer;
    height: 180px;
}

p{
    margin-top:2px;
    font-size:24px;
    margin-bottom: 10px;
}
`