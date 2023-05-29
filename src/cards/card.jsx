import { useEffect, useState, useRef } from "react";
import { CheckCards } from "../helps/checkCards";

export const Card = ({ image, name, id, onSelect, flipped, index }) => {
  const [disabled, setDisabled] = useState(false);
  const [card, setCard] = useState({
    cardId : id,
    cardName : name,
    cardImage : image,
    cardFlipped : flipped
  });
  // const [flipped, setFlipped] = useState(true);

  const { cardId, cardName, cardImage, cardFlipped} = card;

  const cardRef = useRef(null);

  useEffect(() => {
    setCard((prevCard) => ({
      ...prevCard,
      cardFlipped: flipped,
    }));
  }, [flipped]);

  const handleCardClick = async (e) => {
    const value = e.currentTarget.value;
    onSelect(value, index);
  };
  

  return (  
    <div>
      <li
        className={`card ${cardFlipped ? "is-flipped" : ""} ${
          !cardFlipped ? "disabled" : ""
        }`}
        onClick={handleCardClick}
        value={cardId} ref={cardRef}>
        <div className="card-front">
          <img src={cardImage} alt={cardName} />
          <h2>{cardName}</h2>
        </div>
        <div className="card-back">
          <img src="/portal.png" alt="Card Back" />
        </div>
      </li>
    </div>
  );
};
