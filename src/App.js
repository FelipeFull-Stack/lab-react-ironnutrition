import foods from "./foods.json";
import { useState } from "react";
import global from "./global.css";

function App() {

  const [food, setFood] = useState("");



  return (
    <div>
      {foods.map((currentElement) => <p>{currentElement.name}
        <img src={currentElement.image} alt="" key={currentElement.name}/>
      </p>)}
    </div>
  );
}

export default App;
