import React from "react";
import PropTypes from "prop-types";

const favFood = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzoVbwNwurx8xkj0hdIcI6YNbf8okD00EvniBpgZnZAfNWnCWn",
    rating: 4.9
  },
  {
    id: 2,
    name: "Ramen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHu-fVSkgztuemTL6nqJ-vCSC6Tmv57zbZMQ50DqOy1dAeb7Oi",
    rating: 4.5
  },
  {
    id: 3,
    name: "Apple",
    image:
      "https://image.shutterstock.com/image-photo/ripe-red-apple-fruit-half-260nw-699645961.jpg",
    rating: 4.2
  },
  {
    id: 4,
    name: "Pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOl8_b3AIXb9Ems_wVoD5wKIheN514af-CegpiACUmsVX9KwHf",
    rating: 4.8
  }
];

function Food(props) {
  return (
    <div>
      <h3>I like {props.name}</h3>
      <h4>{props.rating}/5.0</h4>
      <img src={props.picture} alt={props.name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      <h1>My favorite Food List</h1>
      {favFood.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
