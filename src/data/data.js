export const Data = [{
  name: 'Espresso',

  ingredients: {
    espresso: 50
  },
  description: `Espresso (aka “short black”) is coffee brewed by expressing or
  forcing out a small amount of nearly boiling water under pressure through
  finely ground coffee beans. It is the foundation and the most
  important part to every espresso based drink. By itself, it is usually served
  in a small cup reserved for espresso shots.`
  // color: ,
  // labelColor:
},
{
  name: 'Caffe Americano',

  ingredients: {
    espresso: 40,
    'hot water': 60
  },
  description: `Also known as a "long black," an Americano is hot water with an
  espresso shot extracted on top. The ratio is about 2/3rds hot water with 1/3
  espresso.`
},
{
  name: 'Cafe Macchiato',

  ingredients: {
    espresso: 80,
    "foamed milk": 5
  },
  description: `This simple drink, sometimes called "espresso macchiato", is an
  espresso coffee drink topped with a small amount of milk, usually foamed, that
  serves to mellow out the harsher tastes of the espresso.`
},
{
  name: 'Cappuccino',

  ingredients: {
    espresso: 34,
    "steamed milk": 33,
    "foamed milk": 33
  },
  description: `A cappucino is an espresso-based drink made with steamed milk
  and milk foam. The added milk helps to tone down the strong espresso flavor.
  It is sometimes topped with chocolate.`
},
{
  name: 'Cafe Latte',

  ingredients: {
    espresso: 30,
    'steamed milk': 60,
    'foamed milk': 10
  },
  description: `A café latte, or “latte” for short, is very similar to a cappuccino--
  it is made with espresso and contains steamed milk and micro-foam. Because of the
  proportion of milk to espresso, however, a latte is more milk-based than espresso-based,
  and the volume of milk makes this drink sweeter and lighter-tasting than a cappuccino.`
},
{
  name: 'Mocha',

  ingredients: {
    espresso: 40,
    chocolate: 40,
    'steamed milk': 20
  },
  description: `A mocha is a mix between a cappuccino and a hot chocolate, and is
  made by mixing chocolate powder with an espresso shot, then adding steamed milk
  and sometimes micro-foam into the beverage.`
},
{
  name: 'Flat White',

  ingredients: {
    espresso: 33,
    'foamed milk': 67
  },
  description: `Invented in Australia, the flat white is an espresso-based drink that
  is similar to a cappuccino, but the milk is micro-foamed. The preparation of the milk
  makes for a more velvety texture.`
},];

export const IngredientColors = {
  "espresso": '#472a0b',
  "foamed milk": '#fff',
  "steamed milk": '#fcfaef',
  "hot water": '#b7f0ff',
  "half & half": '#fcfcf4',
  "chocolate": '#7c685c'
}

export const LabelColors = {
  "espresso": '#e8e6e3',
  "foamed milk": '#5b5955',
  "steamed milk": '#5b5955',
  "hot water": '#f4f7f6',
  "half & half": '#5b5955',
  "chocolate": '#e8e6e3'
}
