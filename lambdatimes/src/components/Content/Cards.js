import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.card.map((card, index) => {
        return <Card card={card} key={index} />;
      })}
    </div>
  );
};
Cards.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      tab: PropTypes.string
    })
  )
};

// Make sure you include prop types for all of your incoming props

export default Cards;
