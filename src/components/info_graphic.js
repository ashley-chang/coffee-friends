import React from 'react';

import InfoGraphicLayer from './info_graphic_layer';

const uuidv4 = require('uuid/v4');

function InfoGraphic(props){
  let ingredients = Object.entries(props.selected.ingredients);
  console.log(ingredients);
  let ingredientDivs = ingredients.map((ingredient) => <InfoGraphicLayer key={ uuidv4() } ingredient={ingredient} />).reverse();
  return(
    <div className="circleGraphic">
      <div className="circleGraphicInner">
        { ingredientDivs }
      </div>
    </div>
  );
  //props.selected.ingredients

}


export default InfoGraphic;
