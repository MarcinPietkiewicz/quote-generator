import React from "react";
import "./QuoteBox.css";
import loadingIcon from "../assets/circle-loading.svg";
import tumblrLogo from "../assets/tumblr-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rnd: 0, quotes: [] };
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
        let num = this.rndQuoteNum(result.quotes?.length ?? 0);
        this.setState({ rnd: num, quotes: result.quotes });
      })
      .catch((err) => console.log("Fetch error: " + err));
  }

  rndQuoteNum(len) {
    if (this.state.quotes !== undefined) {
      return Math.floor(Math.random() * (len + 1));
    } else {
      return 0;
    }
  }

  handleClick() {
    const r = this.rndQuoteNum(this.state.quotes.length);
    return this.setState({ rnd: r });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          {this.state.quotes !== undefined
            ? this.state.quotes[this.state.rnd]?.quote ?? <img src={loadingIcon} alt="loading..." />
            : "Error fetching quotes"}
        </div>
        <div id="author">{this.state.quotes !== undefined ? this.state.quotes[this.state.rnd]?.author ?? "" : ""}</div>
        <button id="twitter-quote"><img src={twitterLogo} alt="twitter logo"/></button>
        <button id="tumblr-quote"><img src={tumblrLogo} alt="tumblr logo" onClick={this.handleClick}/></button>
        <button id="new-quote" onClick={this.handleClick}>
          NEW QUOTE
        </button>
      </div>
    );
  }
}

export default QuoteBox;
