import React from 'react';
import './App.scss';

class App extends React.Component {
  genarateString(params) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz123456789';
    let word = '';
    for (let i = 0; i < 5; i++) {
      word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    console.log(word);
    return word;
  }

  render() {
    const { genarateString } = this;
    return <p className="app">{genarateString()}</p>;
  }
}

export default App;
