import React from "react";
// import ReactDOM from 'react-dom/client';
import "./QuoteBox.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: []};
    this.fetchQuotes = this.fetchQuotes.bind(this);
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

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quotes[0]?.quote ?? "Can't load quotes"}</div>
        <div id="author">{this.state.quotes[0]?.author ?? "Can't load author"}</div>
        <button id="new-quote">NEW QUOTE</button>
        <button id="tweet-quote">tweet-logo</button>
      </div>
    );
  }
}

export default QuoteBox;
