import React from "react";
import styled from 'styled-components';

const Rules = () => {
    return <RulesContainer >
    <h2>How to play Dice Game</h2>
    <div className="b">
    <p>Select any Number</p>
    <p>Click on dice image</p>
    <p>After clicking on dice if selected number is equal to dice number you will get same points as dice, if you get wrong guess then 2 points will be deducted. </p>
    </div>
    </RulesContainer>
}

export default Rules;

const RulesContainer = styled.div`
background-color: #fbf1f1;
padding-left: 8px;
padding-bottom: 5px;
max-width: 800px;
margin: 0 auto;
border-radius: 10px;
h2{
    padding-top: 12px ;
    padding-bottom: 8px;
}

p{
    margin: 8px;
}


`