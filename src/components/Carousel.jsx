import React, { useEffect } from "react";

const Carousel = ({ message }) => {
  const alteredMessage = (n, i) => {
    return n + i;
  };
  const result = (message, alteredMessage) => {
    for (let i = 0; i < message.length; i++) {
      message[i] = alteredMessage(message[i], i);
    }
    return message;
  };
  console.log(result(message, alteredMessage), "map");
  const filteredArray = (n, i) => {
    if (n % i === 0) return true;
  };
  const filter = (message, filteredArray) => {
    let x = [];
    for (let i = 0; i < message.length; i++) {
      if (filteredArray(message[i], i)) {
        return x.push(message[i]);
      }
    }
    return x;
  };
  console.log(filter(message, filteredArray), "filter");
  return <div></div>;
};

export default Carousel;
