import React, { Component } from 'react';
import STORE from './store';
import Browse from './browse';
import Cart from './cart'
import Header from './header'
// import UpdateFeature from './updateFeature'
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

render(){
   
    return (
      
      <div className="App">
          <Header/>
        <main>
          {/* <updateFeature state= {this.state.selected} features ={this.state.features} /> */}
          <Browse updateFeature = {this.updateFeature} features= {this.state.features} selected={this.state.selected}/>
          <Cart selected={this.state.selected} />
        </main>
      </div>
      
    );
  }
}


export default App;
