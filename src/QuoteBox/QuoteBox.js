import React from "react";
// import ReactDOM from 'react-dom/client';
import "./QuoteBox.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: []};
    this.fetchQuotes = this.fetchQuotes.bind(this);
    this.rndQuoteNum = this.rndQuoteNum.bind(this);
  }


  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes() {
      fetch("http://localhost:8000/db") //json-server dev mock-up // json-server --watch quotes.json --port 8000
      // fetch("https://farmerolaf.com/jsons/quotes.json") // swap to this in production
      .then(response => response.json())
      .then(result => {
        this.setState({quotes: result.quotes});
      }).catch(console.log);

  }
  // returns random quote number from quotes array if exists otherwise 0
  rndQuoteNum() {
    return  Math.floor(Math.random() * (this.state.quotes.length + 1)) ?? 0; 
  }

  render() {

    return (
      <div id="quote-box">
        <div id="text">{this.state.quotes[this.rndQuoteNum()]?.quote ?? "loading quote..."}</div>
        <div id="author">{this.state.quotes[this.rndQuoteNum()]?.author ?? "..."}</div>
        <button id="new-quote">NEW QUOTE</button>
        <button id="tweet-quote">tweet-logo</button>
      </div>
    );
  }
}

export default QuoteBox;
