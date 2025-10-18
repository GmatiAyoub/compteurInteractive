import { useState } from 'react';
import Bouton from './bouton.jsx';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [color,setColor] = useState(0);

    const incrementer = () => {
      setCount(count + 1);
      if (count + 1 > 0) {
      setColor("red");}}
    const decrementer = () => {
      setCount(count - 1);
      if (count - 1 < 0) {
      setColor("blue");}}
    const reset = () => setCount(0);
    
    return (
        <div className="app-container">
            <div style={{color:color}} className="counter-display">{count}</div>
            <div className="buttons-container">
                <Bouton label={"Incrementer"} onClick={incrementer} className="btn-increment"/>
                <Bouton label={"Decrementer"} onClick={decrementer} className="btn-decrement"/>
                <Bouton label={"Reset"} onClick={reset} className="btn-reset"/>
            </div>
        </div>
    );
}
export default App;
//un composant doit etre commencer en majuscule
//les props permettent de passer des parametres aux composants