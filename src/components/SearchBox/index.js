import { Card, Row, Col, Divider, Input, Button } from 'antd';


export function SearchBox() {



  return (
    <div>
      <Row>
        <Col>
          <Divider>Search Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>
        <Col>
          <Card title={'Search Food'}>
            <Button onClick={() => {}}>Search</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}