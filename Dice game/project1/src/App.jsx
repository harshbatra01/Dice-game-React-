import StartGame from "./components/startGame";
import Gameplay from "./components/gameplay";
import {useState} from 'react';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return <div>
    {isGameStarted ? <Gameplay />: <StartGame toggle={toggleGameplay} /> }
  </div>
}

export default App;