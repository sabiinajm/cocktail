import { Card, Col, Placeholder, Row } from "react-bootstrap";

export default function RandomLoad() {
  return (
    <Card>
        <Row xs={1} md={2}>
            <Col className="text-center">
                <Card.Img variant="top" src="cocktail.png" style={{width: '300px', opacity: '.5'}} />
            </Col>
            <Col>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Col>
        </Row>
    </Card>
  )
}
