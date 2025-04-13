import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();

  function handleWheel(event) {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const cardElement = cards_data.map((card, index) => {
    return (
      <div className="card" key={index}>
        <img src={card.image} />
        <p>{card.name}</p>
      </div>
    );
  });

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div ref={cardsRef} className="card-list">
        {cardElement}
      </div>
    </div>
  );
};

export default TitleCards;
