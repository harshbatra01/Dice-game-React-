import styled from 'styled-components';
import TotalScore from './totalScore';
import NumberSelector from './numberSelector';
import RollDice from './rolldice';
import { useState } from 'react';
import { Button,Outlinebutton1,Outlinebutton2 } from '../buttons';
import Rules from './rules';

const Gameplay = () => {

    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() 
                * (max - min + 1)) + min;
    };

    const randomNumberGenerator = () => {
        if(selectedNumber === undefined) {
            setError("You have not selected any number")
            return;
        }
        setError("");

        const a = randomNumberInRange(1,6);
        setCurrentDice((prev) => a);

        if(selectedNumber === a){
            setScore((prev) => prev + a);
        }
    
        if(selectedNumber !== a){
            setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }

    const toggleShowRules = () => {
        setShowRules((prev) => !prev);
    }

    
    return <Container>

    <div className='topSection'>
        <TotalScore 
            score = {score}
        />
       <NumberSelector
       error = {error}
       selectedNumber = {selectedNumber}
       setSelectedNumber = {setSelectedNumber} />
    </div>
    <RollDice
    currentDice = {currentDice}
    randomNumberGenerator = {randomNumberGenerator} />
    <div className='btns'>
        <Outlinebutton1 onClick={resetScore}>Reset</Outlinebutton1>
        <Outlinebutton2 onClick={toggleShowRules}>{showRules ? "Hide" : "Show"} Rules</Outlinebutton2>
    </div>
    { showRules && <Rules />}
    </Container>
}

export default Gameplay;

const Container = styled.div`


padding-top: 10px;
.topSection{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.btns{
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
}


`