import React, { useState } from "react";
import "./RandomQuote.css";

const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://quotes-api-self.vercel.app/quote");
    quotes = await response.json();
  }

  const [quote,setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal",
    author:"Johann Wolfgang von Goethe",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  loadQuotes()

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icons">
            <i
              class="bx bx-ghost bx-md"
              onClick={() => {
                random()
              }}
            ></i>
            <i class="bx bxl-twitter bx-md"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
