import { Card, Offcanvas } from "react-bootstrap"
import CocktailAPI from "../provider/CocktailAPI"

function Details({show, setShow, obj}) {
    const {name, cat, alc, glass, desc, img, ingr=[], meas=[]} = obj
    

    return (
        <Offcanvas show={show} onHide={() => setShow(false)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Card>
                    <Card.Img variant="top" src={img} alt={name} />
                    <Card.Body>
                        <Card.Title>{name}
                            <h6>{cat} / {alc}</h6>
                        </Card.Title>
                        <p><b>Glass: </b> {glass}</p>
                        <Card.Text>
                            <b>Description: </b>{desc}
                        </Card.Text>
                        <p><b>Inrgedients: </b></p>
                        <ul>
                            {ingr?.map((ing, i) => <li key={i}>{ing} ({meas[i]})</li>)}
                        </ul>
                    </Card.Body>
                </Card>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Details