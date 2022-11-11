import foods from "./foods.json";
import { useState } from "react";
import global from "./global.css";
import { FoodBox } from "./components/FoodBox";

function App() {

  const [food, setFood] = useState("");



  return (
    <div>
      {/* {foods.map((currentElement) => <p>{currentElement.name}<br />
        <img src={currentElement.image} alt="" key={currentElement.name} />
      </p>)} */}
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
    </div>
  );
}

export default App;
