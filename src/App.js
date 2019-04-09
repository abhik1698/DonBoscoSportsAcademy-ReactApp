import React, { Component } from 'react';
import Header from './Header';
import Homepage from './Homepage'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
