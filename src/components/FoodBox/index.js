import { Button, Col, Card } from "antd";

export function FoodBox(props) {

    const { name, calories, image, servings, deleteFunction, attDelFunction, allFoods } = props;

    function handleDelete() {
        deleteFunction((prevState) => {
            return prevState.filter((currentElement) => {
                return currentElement.name !== name;
            })
        })

        attDelFunction(allFoods)

    }

    return (
        <Col>
            <Card
                title={name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={image} height={60} alt="food" />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                    <b>Total Calories: {calories * servings}</b>kcal
                </p>
                <Button type="danger" onClick={handleDelete}> Delete </Button>
            </Card>
        </Col>
    );
}