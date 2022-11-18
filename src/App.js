import foods from "./foods.json";
import { FoodBox } from "./components/FoodBox";
import { Row } from "antd";
import { SearchBox } from "./components/SearchBox";

function App() {

    return (
      <div>
        <SearchBox />
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foods.map((currentElement) => {
            return (
              <FoodBox
                name={currentElement.name}
                calories={currentElement.calories}
                image={currentElement.image}
                servings={currentElement.servings}
              />
            )
          })}
        </Row>
      </div>
    );
  }

export default App;
