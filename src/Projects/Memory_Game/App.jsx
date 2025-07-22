import { useState, useEffect } from "react";
import "./App.css";

const cardsArray = ["🔥", "💎", "🚀", "⚡", "🎮", "🎲", "🎯", "🔮"];

export default function App() {
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Function to start the game after user enters name
  const startGame = () => {
    const shuffledCards = [...cardsArray, ...cardsArray].sort(
      () => Math.random() - 0.5
    );
    setCards(
      shuffledCards.map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false,
      }))
    );
    setMoves(0);
    setGameWon(false);
    setGameStarted(true);
  };

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setTimeout(() => setGameWon(true), 500);
    }
  }, [cards]);

  const flipCard = (index) => {
    if (!cards[index].flipped && flippedCards.length < 2) {
      setCards((prev) =>
        prev.map((card, i) => (i === index ? { ...card, flipped: true } : card))
      );
      setFlippedCards([...flippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].emoji === cards[second].emoji) {
        setCards((prev) =>
          prev.map((card, i) =>
            i === first || i === second ? { ...card, matched: true } : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) =>
              i === first || i === second ? { ...card, flipped: false } : card
            )
          );
        }, 800);
      }
      setFlippedCards([]);
      setMoves(moves + 1);
    }
  }, [flippedCards, cards, moves]);

  return (
    <div className="game-container">
      {!gameStarted ? (
        <div className="start-screen">
          <h1>Welcome to Memory Card Game 🎮</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={startGame} disabled={!username.trim()}>
            Start Game
          </button>
        </div>
      ) : gameWon ? (
        <div className="win-screen">
          <h1>🎉 Congratulations, {username}! 🎉</h1>
          <p>You won in {moves} moves!</p>
          <button onClick={startGame}>Play Again</button>
        </div>
      ) : (
        <>
          <h1>Memory Card Game 🎮</h1>
          <p>
            Player: {username} | Moves: {moves}
          </p>
          <div className="grid">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`card ${card.flipped ? "flipped" : ""} ${
                  card.matched ? "matched" : ""
                }`}
                onClick={() => flipCard(index)}
              >
                <div className="front">{card.emoji}</div>
                <div className="back">❓</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
