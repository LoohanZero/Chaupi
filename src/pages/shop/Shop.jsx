import React from 'react'
import cards from '../../assets/resources/CardsData';
import Card from '../../components/card/Card';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-cards-container">
      {
        cards.map((card) => 
        <Card id={card.id} key={card.id} image={card.img} title={`${card.price} €`}/>)
      }
    </div>
  )
}

export default Shop