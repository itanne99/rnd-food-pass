var FoodJson = "https://www.randomlists.com/data/ingredients.json";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export default function handler(req, res) {
    fetch(FoodJson).then(resl => resl.json()).then((out) => {
        const data = out['data'];

        var food1 = data[Math.floor(Math.random()*data.length)] , food2 = data[Math.floor(Math.random()*data.length)];
        if(food1.length > 5){
            food1=food1.slice(0,5);
        }
        if(food2.length > 5){
            food2=food2.slice(0,5);
        }

        food1=capitalizeFirstLetter(food1);
        food2=capitalizeFirstLetter(food2);
        const num = Math.floor(1000 + Math.random() * 9000)

        const result = (food1+food2+"#"+num).split(' ').join('');

        return res.status(200).json(result);
    }).catch(err => res.status(200).json(err));
  }