import React, { Component } from 'react';
import Mainform from '../MainForm/MainForm'
import Header from '../Header/Header'
import STORE from '../Store/Store';
import MainSummary from '../MainSummary/MainSummary';
import './App.css';


class App extends Component {

  state=
  {selected: STORE.selected,
  features: STORE.FEATURES
  }
  

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
    
  };

  render() {
  
    return (
      <div className="App">
        <Header />
   
        <main>
            <Mainform
              theState={this.state.selected}
              updateFeatures={this.updateFeature}
            />
         <MainSummary 
          theState={this.state.selected}
          updateFeatures={this.updateFeature}
         />
        </main>
      </div>
    );
  }
}

export default App;
