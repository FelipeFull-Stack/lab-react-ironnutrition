import foods from "./foods.json";
import { FoodBox } from "./components/FoodBox";
import { Row } from "antd";
import { SearchBox } from "./components/SearchBox";
import { useState } from "react"
import { FoodForm } from "./components/FoodForm"

function App() {

  const [food, setFood] = useState(foods);

  const [filter, setFilter] = useState(food);

  return (
    <div>
      <FoodForm addFoods={setFood} />

      <SearchBox filterFunction={setFilter} allFoods={food} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filter.map((currentElement) => {
          return (
            <FoodBox
              name={currentElement.name}
              image={currentElement.image}
              calories={currentElement.calories}
              servings={currentElement.servings}
              deleteFunction={setFood}
              attDelFunction={setFilter}
              allFoods={food}
            />
          )
        })}
      </Row>
    </div>
  );
}

export default App;
