import React from "react";
// import ReactDOM from 'react-dom/client';
import "./QuoteBox.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [] };
    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount() {
    const quotes = this.getQuotes()
    this.setState(
      {quotes: quotes}
    )
  }

  getQuotes = () => {
    fetch('../quotes.json')
    .then(function(response){console.log(response)
    return response.json();})
    .then(function(myJson) {
      console.log(myJson);
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quotes ?? 'no quotes loaded'}</div>
        <div id="author">author</div>
        <button id="new-quote">NEW QUOTE</button>
        <button id="tweet-quote">tweet-logo</button>
      </div>
    );
  }
}

export default QuoteBox;
