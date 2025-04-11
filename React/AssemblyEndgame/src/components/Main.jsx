import { languages } from "./languages.js";
import Language from "./Language.jsx";
import Letter from "./Letter.jsx";
import { getFarewellText, generateRandomWord } from "./utils.js";

import Confetti from "react-confetti";
import { useState } from "react";

export default function Main() {
  // state change variables
  const [currentWord, setCurrentWord] = useState(() => generateRandomWord());
  const [userGuessLetters, setUserGuessLetters] = useState([]);
  const wordArray = [...currentWord].map((char) => char.toUpperCase());
  // keyboard alphabets
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // wrong guess counter
  const wrongGuessCount = userGuessLetters.filter((letter) => !currentWord.includes(letter.toLowerCase())).length;

  // check if the game is over
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = wordArray.every((letter) => userGuessLetters.includes(letter));
  const isGameOver = isGameWon || isGameLost;

  // farewell message
  let farewellText;
  if (wrongGuessCount > 0) {
    const lastDeletedLang = languages[wrongGuessCount - 1].name;
    farewellText = getFarewellText(lastDeletedLang);
  }

  // languages
  const languageDisplay = languages.map((lang, index) => {
    const lost = index < wrongGuessCount;
    return <Language isLost={lost} id={index} key={index} name={lang.name} backgroundColor={lang.backgroundColor} color={lang.color} />;
  });

  // Guessing word
  const wordElement = wordArray.map((letter, index) => {
    const shouldRevealLetter = isGameLost || userGuessLetters.includes(letter);
    const letterLost = isGameLost && !userGuessLetters.includes(letter);
    let letterClass = "";
    if (letterLost) {
      letterClass = "guess-letter wrong-letter";
    } else {
      letterClass = "guess-letter";
    }
    return (
      <span id={index} key={index} className={letterClass}>
        {shouldRevealLetter ? letter : ""}
      </span>
    );
  });

  // keyboard
  const alphabetArray = [...alphabet].map((char) => char.toUpperCase());
  const keyboardElement = alphabetArray.map((letter) => {
    let checkButtonClass = "";
    if (userGuessLetters.includes(letter)) {
      if (wordArray.includes(letter)) {
        checkButtonClass = "#10a95b";
      } else {
        checkButtonClass = "#ec5d49";
      }
    } else {
      checkButtonClass = "#fcba29";
    }

    return (
      <button
        style={{
          backgroundColor: checkButtonClass,
          border: "2px solid wheat",
        }}
        disabled={isGameOver}
        key={letter}
        onClick={() => updateUserGuesses(letter)}
      >
        {letter}
      </button>
    );
  });

  function updateUserGuesses(letter) {
    setUserGuessLetters((prevGuess) => {
      if (!prevGuess.includes(letter)) {
        return [...prevGuess, letter];
      } else {
        return [...prevGuess];
      }
    });
  }

  let gameStatusClass;
  if (isGameOver) {
    if (isGameWon) {
      gameStatusClass = "game-won";
    }
    if (isGameLost) {
      gameStatusClass = "game-lost";
    }
  } else {
    gameStatusClass = "game-playing";
  }

  let colorLostStatus = "";
  if (wrongGuessCount > 0) {
    if (wordArray.includes(userGuessLetters[userGuessLetters.length - 1])) {
      colorLostStatus = "remove-status-lang-lost";
    } else {
      colorLostStatus = "status-lang-lost";
    }
  }

  function renderGameStatus() {
    if (!isGameOver) {
      if (wrongGuessCount > 0 && !wordArray.includes(userGuessLetters[userGuessLetters.length - 1])) {
        return (
          <>
            <h3 className="lose-lang">{farewellText}</h3>
          </>
        );
      }
      return null;
    }

    if (isGameWon) {
      return (
        <>
          <h2 className="game-status">You win!</h2>
          <p className="message">Well done! 🎉</p>
        </>
      );
    } else {
      return (
        <>
          <h2 className="game-status">Game over!</h2>
          <p className="message">You lose! Better start learning Assembly 😲</p>
        </>
      );
    }
  }

  function resetGame() {
    setCurrentWord(generateRandomWord());
    setUserGuessLetters([]);
  }

  return (
    <main className="game-main">
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <section className={"status " + gameStatusClass + " " + colorLostStatus}>{renderGameStatus()}</section>
      <section className="languages">{languageDisplay}</section>
      <section className="guess-word">{wordElement}</section>
      <section className="keyboard">{keyboardElement}</section>
      {isGameOver && (
        <button onClick={resetGame} className="new-game">
          New Game
        </button>
      )}
    </main>
  );
}
