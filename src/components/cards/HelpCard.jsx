import React from 'react';
import './helpCard.scss';

const HelpCard = ({item}) => {
  return (
    <div className='help-card'>
        <div className="help-card-wrapper">
            <img src={item.icon} alt="" />
            <p>{item.title}</p>
            <p>{item.content}</p>
        </div>
    </div>
  )
}

export default HelpCard