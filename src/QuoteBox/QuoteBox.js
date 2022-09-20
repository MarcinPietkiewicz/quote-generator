import React from "react";
import "./QuoteBox.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomNumber: null, quotes: [] };
    this.fetchQuotes = this.fetchQuotes.bind(this);
    this.rndQuoteNum = this.rndQuoteNum.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes() {
    fetch("http://localhost:8000/db") //json-server dev mock-up // json-server --watch quotes.json --port 8000
      // fetch("https://farmerolaf.com/jsons/quotes.json") // swap to this in production
      .then((response) => response.json())
      .then((result) => {
        let rnd = this.rndQuoteNum();
        this.setState({ random: rnd, quotes: result.quotes });
      })
      .catch((err) => console.log("Fetch error: " + err));
  }

  rndQuoteNum() {
    if (this.state.quotes !== undefined) {
      return Math.floor(Math.random() * (this.state.quotes.length + 1));
    } else {
      return 0;
    }
  }

  handleClick() {
    const r = this.rndQuoteNum();
    return this.setState({ random: r });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          {this.state.quotes !== undefined
            ? this.state.quotes[this.rndQuoteNum()]?.quote ?? "loading quote..."
            : "Error fetching quotes"}
        </div>
        <div id="author">
          {this.state.quotes !== undefined
            ? this.state.quotes[this.rndQuoteNum()]?.author ?? ""
            : ""}
        </div>
        <button id="tweet-quote">tweet-logo</button>
        <button id="new-quote" onClick={this.handleClick}>
          NEW QUOTE
        </button>
      </div>
    );
  }
}

export default QuoteBox;
