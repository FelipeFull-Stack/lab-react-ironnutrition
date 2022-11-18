import { Button, Col, Card } from "antd";

export function FoodBox(props) {

    const { name, calories, image, servings } = props;

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
                    <b>Total Calories: {calories * servings}kcal</b>
                </p>
                <Button type="primary"> Delete </Button>
            </Card>
        </Col>
    );
}