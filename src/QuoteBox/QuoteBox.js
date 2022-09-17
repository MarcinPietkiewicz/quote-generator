import React from "react";
// import ReactDOM from 'react-dom/client';
import "./QuoteBox.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: []};
    // this.fetchQuotes = this.fetchQuotes.bind(this);
  }


  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes() {
      fetch("http://localhost:8000/quotes")
      // json-server --watch quotes.json --port 8000
      // fetch("https://farmerolaf.com/jsons/quotes.json") // this is working
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        this.setState({quotes: result})
      }).catch(console.log);

  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quotes[0]?.quote ?? 'no quotes loaded'}</div>
        <div id="author">{this.state.quotes[0]?.author ?? 'no author loaded'}</div>
        <button id="new-quote">NEW QUOTE</button>
        <button id="tweet-quote">tweet-logo</button>
        {/* {console.log('state in quotes ->'+this.state.quotes[1]?.author ?? 'nope')} */}
      </div>
    );
  }
}

export default QuoteBox;
