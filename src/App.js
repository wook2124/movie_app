import React from "react";

function Food(props) {
  return (
    <div>
      <h3>I like {props.name}</h3>
      <img src={props.picture} />
    </div>
  );
}

const favFood = [
  {
    name: "Kimchi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzoVbwNwurx8xkj0hdIcI6YNbf8okD00EvniBpgZnZAfNWnCWn"
  },
  {
    name: "Ramen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHu-fVSkgztuemTL6nqJ-vCSC6Tmv57zbZMQ50DqOy1dAeb7Oi"
  },
  {
    name: "Apple",
    image:
      "https://image.shutterstock.com/image-photo/ripe-red-apple-fruit-half-260nw-699645961.jpg"
  },
  {
    name: "Pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOl8_b3AIXb9Ems_wVoD5wKIheN514af-CegpiACUmsVX9KwHf"
  }
];

function App() {
  return (
    <div>
      <h1>Hello, I'm renewed!</h1>
      {favFood.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
