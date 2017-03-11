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
        <section className="content-container searchbar">
          <form>
            <input className="search" type="text" placeholer="Search for dining"/>
          </form>
        </section>
        <section className="content-container speech-button">
            <p><i className="fa fa-microphone fa-5x icon"></i></p>
        </section>
      </main>
    );
  }
}

export default App;
