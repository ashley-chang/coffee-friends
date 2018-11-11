import React from 'react';

//import CoffeeListItem from './coffee_list_item';
const uuidv4 = require('uuid/v4');

function CoffeeList(props){
  let coffeeList = props.data.map((item) => {
    if (item.name === props.selected.name) {
      return <li onClick={props.onClick} className="active" key={ uuidv4() } name={item.name}>{ item.name }</li>;
    }
    return <li onClick={ props.onClick } key={ uuidv4() } name={item.name}>{ item.name }</li>;
  });

  return(
    <ul className="coffee-list">
      { coffeeList }
    </ul>
  );
}

export default CoffeeList;
