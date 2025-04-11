import { useState } from "react";
import Die from "./Die";
import Confetti from "react-confetti";

export default function MainBody() {
  const [diceNumbers, setDiceNumbers] = useState(() => allNewDice());
  const gameWon = diceNumbers.every((die) => die.isHeld) && diceNumbers.every((die) => die.value === diceNumbers[0].value);

  function allNewDice() {
    return new Array(10).fill(0).map((value, index) => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: index,
      };
    });
  }

  function hold(id) {
    const newDiceNumbers = diceNumbers.map((dieData) => {
      if (dieData.id === id) {
        return {
          ...dieData,
          isHeld: !dieData.isHeld,
        };
      } else {
        return { ...dieData };
      }
    });
    setDiceNumbers(newDiceNumbers);
  }

  const displayDices = diceNumbers.map((dieInfo) => (
    <Die id={dieInfo.id} toggle={hold} isHeld={dieInfo.isHeld} key={dieInfo.id} value={dieInfo.value} />
  ));

  function handleRollDice() {
    if (!gameWon) {
      const newRandomDice = allNewDice();
      const newDiceNumbers = diceNumbers.map((dieData, index) => {
        if (!dieData.isHeld) {
          return {
            ...dieData,
            value: newRandomDice[index].value,
          };
        } else {
          return { ...dieData };
        }
      });
      setDiceNumbers(newDiceNumbers);
    } else {
      setDiceNumbers(allNewDice());
    }
  }

  return (
    <main className="game-main">
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations you won</p>}
      </div>
      <div className="game-info">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all the dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className="die-container">{displayDices}</div>
      <button onClick={handleRollDice} className="roll-die">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
