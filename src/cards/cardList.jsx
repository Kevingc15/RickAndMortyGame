import { useState, useEffect, useRef } from "react";

import { Card } from "./card";
import { getCards } from "../helps/getCards";
import { CheckCards } from "../helps/checkCards";
import { UseLoading } from "../hooks/useLoading";
import { UseWin } from "../hooks/useWin";

export const CardList = () => {
  const [cards, setCards] = useState([]);
  const [idCheck, setIdCheck] = useState([]);
  const [indexCheck, setIndexCheck] = useState([]);
  const [counter, setCounter] = useState({
    moves : 0,
    toWin : 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isWin, setIsWin] = useState(false);

  const {moves, toWin} = counter;

  const sumMoves = () =>{
    setCounter({...counter, moves : moves + 1});
  }
  const sumToWin = () =>{
    setCounter({...counter, toWin : toWin + 1});
  }

  const handleRestar = () =>{
    setCards([]);
    setIsLoading(true);
    fetchCards();
    setCounter({moves : 0, toWin : 0})
    setIsWin(false);
  }

  const fetchCards = async () => {
    const response = await getCards();
    let index = 0;
    for (let i = 0; i < 2; i++) {
      response.map((c) =>
        setCards((prev) =>
          [
            ...prev,
            {
              id: c.id,
              name: c.name,
              image: c.image,
              flipped: true,
              index: ++index,
            },
          ].sort(() => Math.random() - 0.5)
        )
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleCardClick = (id, index) => {
    sumMoves();
    changeFlipp(index, false);
    setIdCheck((prev) => [...prev, id]);
    setIndexCheck((prev) => [...prev, index]);
  };

  useEffect(() => {
    if(idCheck.length > 1){
      if(!CheckCards(idCheck)){
        setTimeout(() => {
          indexCheck.map((index) => changeFlipp(index, true));
        }, 350);
      }else{
        setTimeout(() => {
          sumToWin();
        }, 250);
      }
      setIdCheck([]);
      setIndexCheck([]);
    }
    toWin > 4 && setIsWin(true);
  }, [handleCardClick]);

  const changeFlipp = async (index, value) => {
    setCards((prev) => [
      ...prev.map((c) => {
        if (c.index === index) {
          c.flipped = value;
          return c;
        } else {
          return c;
        }
      }),
    ]);
  };

  return (
    <div>
      {
        isLoading && <UseLoading/>
      }
      <div className="p-moves">
        <p>Moves: {moves}</p>
      </div>
      <ul className="card-list">
        {cards.map((card, index) => (
          <Card key={index} {...card} onSelect={handleCardClick} />
        ))}
        {
          isWin && <div className="win-message">
          <p>¡Ganaste con {moves} movimientos!</p>
          <button onClick={handleRestar}>Volver a empezar</button>
        </div>
        }
      </ul>
    </div>
  );
};
