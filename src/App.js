import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="main-app-container">
        <header className="content-container header">
          <section>
            <img src="http://res.cloudinary.com/meetshermanchen-com/image/upload/v1489262593/Logo_horizontal_RGB_rrnfhk.png" alt="OpenTable" className="brand"/>
          </section>
        </header>
        <section className="searchbar">
          <form>
            <input className="search white" type="text" placeholder=" Location or Restaurant" />
          </form>
        </section>
            <a className="waves-effect waves-light speech-button"><i className="fa fa-microphone fa-5x icon"></i></a>
      </main>
    );
  }
}

export default App;
