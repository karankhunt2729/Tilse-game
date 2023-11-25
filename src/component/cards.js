import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useNavigate, useLocation } from 'react-router-dom';
import NameInput from '../NameInput';

function Cards() {
   
  
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const userName = state ? state.userName : null;

  const [items, setItems] = useState([
    { id: 1, img: '/img/barberion.png', stat: "" },
    { id: 1, img: '/img/barberion.png', stat: "" },
    { id: 2, img: '/img/bowler.png', stat: "" },
    { id: 2, img: '/img/bowler.png', stat: "" },
    { id: 3, img: '/img/dragon.png', stat: "" },
    { id: 3, img: '/img/dragon.png', stat: "" },
    { id: 4, img: '/img/giant.png', stat: "" },
    { id: 4, img: '/img/giant.png', stat: "" },
    { id: 5, img: '/img/minions.png', stat: "" },
    { id: 5, img: '/img/minions.png', stat: "" },
    { id: 6, img: '/img/pekka.png', stat: "" },
    { id: 6, img: '/img/pekka.png', stat: "" },
    { id: 7, img: '/img/king.png', stat: "" },
    { id: 7, img: '/img/king.png', stat: "" },
    { id: 8, img: '/img/wallbreaker.png', stat: "" },
    { id: 8, img: '/img/wallbreaker.png', stat: "" }
  ].sort(() => Math.random() - 0.5));

  const [prev, setPrev] = useState(-1);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (items.every((item) => item.stat === 'correct')) {
      
      setGameCompleted(true);
    }
  }, [items]);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
      setScore((prevScore) => prevScore + 1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setScore((prevScore) => Math.max(prevScore - 1, 0));
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (!gameCompleted) {
      if (prev === -1) {
        items[id].stat = 'active';
        setItems([...items]);
        setPrev(id);
      } else {
        check(id);
      }
    }
  }

  useEffect(() => {
    if (gameCompleted) {
    
      navigate('../Pages/congratulation');
    }
  }, [gameCompleted, navigate]);

  return (

    <div className="container">
     
      {gameCompleted ? (
        <h1>🥳🥳Congratulation score:{score} </h1>
        
      ) : (
        items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))
        
      )}
       <p>{userName}</p> 
      
    </div>
    
  );
}

export default Cards;

