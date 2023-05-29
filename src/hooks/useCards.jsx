import { useState } from "react";
import { getCards } from "../helps/getCards";

export const useCards = () => {
    const [cards, setCards] = useState([]);
    const [idCheck, setIdCheck] = useState([]);
    const [indexCheck, setIndexCheck] = useState([]);

    const changeCards = (arr = []) =>{
        arr.length < 1 ? setCards([]) : setCards((prev) => [...prev, arr]);
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
      };
    
  return {
    cards,
    changeCards,
    idCheck,
    setIdCheck,
    indexCheck, 
    setIndexCheck,
    fetchCards
  }
}
