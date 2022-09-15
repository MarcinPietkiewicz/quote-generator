import React from "react";
// import ReactDOM from 'react-dom/client';
import './QuoteBox.css';

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <div id="text">quote text</div>
        <div id="author">author</div>
        <button id="new-quote">NEW QUOTE</button>
        <button id="tweet-quote">tweet-logo</button>
      </div>
    );
  }
}

export default QuoteBox;