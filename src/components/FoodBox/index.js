import { Button } from "antd";
import style from "./style.module.css";

export function FoodBox(props={
    name: "",
    calories: "",
    image: "",
    servings: ""
}) {
    return (
        <div className={style.divStructure}>
            Nome: {props.name}
            <img src={props.image} alt="" />
            Calories: {props.calories}
            Servings: {props.servings}
            Total Calories: {props.calories}kcal
            <Button type="primary">Delete</Button>


        </div>
    );
}


{/* <Button type="primary">Primary Button</Button> */}

{/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */}