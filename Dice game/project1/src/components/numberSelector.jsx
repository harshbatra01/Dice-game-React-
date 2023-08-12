import { useState } from 'react';
import styled from 'styled-components';


const NumberSelector = ({selectedNumber,setSelectedNumber,error}) => {

    const arr = [1,2,3,4,5,6];
    

    return <Container>

    <p className='error'>{error}</p>
    <div className='array'>
   { arr.map((value,index) => (

    <Box key={index} 
    onClick={ () => {setSelectedNumber(value)}}
    isSelected = {value === selectedNumber} >
    {value}
    </Box>
    
    ))}
    </div>

    <p>Selected Number</p>

    </Container>
}

export default NumberSelector;

const Box = styled.div`

height: 72px;
width: 72px;
border: 1px solid black;
font-size: 24px;
font-weight: 700;
place-items: center;
display: grid;
background-color: ${(props) => (props.isSelected ? 'black' : 'white' )};
color: ${(props) => (props.isSelected ? 'white' : 'black' )};
cursor: default;


`

const Container = styled.div`
.error{
    color: red;
}
display: flex;
flex-direction: column;
align-items: end;

.array{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: 700px;
}
`