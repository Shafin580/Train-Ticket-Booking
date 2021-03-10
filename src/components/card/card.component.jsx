import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className = 'card-container'>
        <img alt = 'monster' src = {"https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539_1280.jpg"} width = '250' />
        <h4>Route: {props.schedule.title}</h4>
        <p>Departure Time: {props.schedule.departureTime}</p>
    </div>
    
)