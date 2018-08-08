import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AotterTrek('nativeVideoAd')</h1>
        </header>
        <p className="App-intro">
          <h1>Should load video</h1>
          <AotterTrekVideoAd />
        </p>
      </div>
    );
  }
}

class AotterTrekVideoAd extends Component {
  
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.ad = React.createRef();
  }

  componentDidMount() {
    
    const { AotterTrek } = window;

    AotterTrek('nativeVideoAd', {
      selector: this.ad
    });

    AotterTrek(function(API) {
      API.Event.on('onAdLoad', function(data) {
        console.log('onAdLoad')
      });
      API.Event.on('onAdFail', function() {
        console.log('onAdFail')
      });
    });

  }

  render() {
    return (
      <ins ref={this.ad} data-trek-ad="video" data-layout="prebuilt" data-place="placement_name"></ins>
    );
  }
}

export default App;
