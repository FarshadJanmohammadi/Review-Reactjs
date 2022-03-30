import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const minMaxIndex = (min, max) => {
    return index >= min && index <= max ? true : false;
  };

  const prevPerson = () => {
    setIndex(minMaxIndex(1, 3) ? index - 1 : 3);
  };

  const nextPerson = () => {
    setIndex(minMaxIndex(0, 2) ? index + 1 : 0);
  };

  const randomPerson = () => {
    const indexRandom = Math.floor(Math.random() * people.length);

    const exactRandom = indexRandom === index && minMaxIndex(0, 2) ? indexRandom + 1 : indexRandom;
    setIndex(exactRandom);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <div>
          {" "}
          <button className="random-btn" onClick={randomPerson}>
            Suprise me
          </button>
        </div>
      </div>
    </article>
  );
};

export default Review;
