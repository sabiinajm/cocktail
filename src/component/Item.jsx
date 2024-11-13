import { Button, Card } from "react-bootstrap";
import Details from "./Details";
import { useEffect, useState } from "react";

function Item({obj}) {
    const [show, setShow] = useState(false)
    const [idDrink, setIdDrink] = useState(0)
    const {id, name, cat, alc, glass, desc, img, ingr=[], meas=[]} = obj

    useEffect(()=>{
        setIdDrink(id)
    }, [show])

    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Button test={id} onClick={() => setShow(true)} variant="primary">Show Details</Button>
                </Card.Body>
            </Card>
            <Details show={show} setShow={setShow} obj={obj} />
        </>
    )
}

export default Item