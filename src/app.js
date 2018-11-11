import React, { Component } from 'react';

import InfoGraphic from './components/info_graphic';
import InfoDetails from './components/info_details';
import CoffeeList from './components/coffee_list';

import { Data } from './data/data';

const demo = Data[0];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: demo
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(Data);
    var selectedKey = e.target.getAttribute('name');
    var selectedItem = Data.find((item) => {
      return (item.name === selectedKey);
    });
    this.setState({
      selected: selectedItem
    });
  }

  render() {
    console.log(Data);
    return(
      <div className="container">
        <h1 className="title"><span>Coffee Friends</span></h1>
        <div className="content">
          <InfoGraphic selected={this.state.selected}/>
          <InfoDetails selected={this.state.selected}/>
          <CoffeeList data={Data} selected={this.state.selected} onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
