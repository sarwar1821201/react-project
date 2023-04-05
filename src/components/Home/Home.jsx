import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';



const Home = ({handleWatchTime, handleBookMark}) => {
  
    const [cards,setCards] = useState([]);
   
     useEffect(()=> {
         fetch("data.json")
        .then((res)=> res.json())
        .then((data)=> setCards(data))
     },[])

    return (
    
              <div className="image-container">
            {
                cards.map((card)=> (
                    <SingleCard key={card.id} handleWatchTime={handleWatchTime} card={card} handleBookMark={handleBookMark}> </SingleCard>

                ))}
            </div> 
        
    );
};

export default Home;