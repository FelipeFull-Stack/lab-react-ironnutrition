import { Card, Row, Col, Divider, Button } from 'antd';

export function SearchBox(props) {

    const { filterFunction, allFoods } = props

    function handleFilter(event) {


        filterFunction((prevState) => {

            if (prevState.length === 1) {
                return allFoods.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(event.target.value.toLowerCase())
                })
            } else {
                return prevState.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(event.target.value.toLowerCase())
                })
            }
        })

        if (event.target.value === "") {
            filterFunction(allFoods)
        }
    }

    return (
        <div>
            <Row>
                <Col>
                    <Divider>Search Input</Divider>
                    <input type="text" onChange={handleFilter} />
                </Col>
                {/* <Col>
                    <Card title={'Search Food'}>
                        <Button onClick={() => { }}>Search</Button>
                    </Card>
                </Col> */}
            </Row>
        </div>
    );
}