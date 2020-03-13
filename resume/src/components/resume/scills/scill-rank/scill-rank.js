import React from 'react';
import './scill-rank.scss';

export default function ScillRank(props) {
    return (
      <div className="scill">
          <span className="scill__name">{props.scillName}</span>
          <div className="scill__bar" data-skill={props.scillLevel}></div>
      </div>
      );
};