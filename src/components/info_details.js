import React from 'react';

const uuidv4 = require('uuid/v4');

function InfoDetails(props){
  //props.selected
  let name = props.selected.name;
  let ingredients = Object.keys(props.selected.ingredients);
  let description = props.selected.description;


  return (
    <div className="info-details">
      <div className="name">{ name }</div>
      <div className="ingredients">{ ingredients.map((ingredient, index) => {
        //console.log(props.selected.key);
          return <span key={ uuidv4() }>{ index < ingredients.length - 1 ? ingredient + ',\u00A0' : ingredient }</span>;
        })}
      </div>
      <div className="description">{ description }</div>
    </div>
  );

}
export default InfoDetails;
