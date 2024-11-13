import { Card, Col, Row } from "react-bootstrap";

export default function RandomError() {
  return (
    <Card>
            <Row xs={1} md={2}>
            <Col className="text-center">
            <Card.Img variant="top" src="cocktail.png" style={{width: '250px', opacity: '.5'}} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>Error 404</Card.Title>
                        <h6>Page not found....</h6>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
  )
}
