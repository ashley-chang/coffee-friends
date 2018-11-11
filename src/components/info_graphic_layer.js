import React from 'react';

import { IngredientColors, LabelColors } from '../data/data';

function InfoGraphicLayer(props) {
  let name = props.ingredient[0];
  let ratio = props.ingredient[1];
  let backgroundColor = IngredientColors[name];
  let labelColor = LabelColors[name];

  let backgroundStyles = {
    height: ratio + '%',
    backgroundColor: backgroundColor
  }

  let labelStyles = {
    color: labelColor
  }

  return(
    <div className="ingredientLayer" style={ backgroundStyles }>
      <div className="ingredientLayerLabel" style = { labelStyles }>
        { name }
      </div>
    </div>
  );

}

export default InfoGraphicLayer;
