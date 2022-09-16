import React from "react";
// import ReactDOM from 'react-dom/client';
import "./QuoteBox.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quotes: [''] };
    this.fetchQuotes = this.fetchQuotes.bind(this);
  }


  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes() {
    this.setState(() => {
      fetch("https://farmerolaf.com/jsons/quotes.json")
      .then(resolve => resolve.json())
      .then(result => this.setState({
        quotes: result
      })).catch(console.log);

  })
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quotes[0] ?? 'no quotes loaded'}</div>
        <div id="author">author</div>
        <button id="new-quote">NEW QUOTE</button>
        <button id="tweet-quote">tweet-logo</button>
      </div>
    );
  }
}

export default QuoteBox;
