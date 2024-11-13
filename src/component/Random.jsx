import { Button, Card, Col, Row } from "react-bootstrap"
import CocktailAPI from "../provider/CocktailAPI"
import { useEffect, useState } from "react"
import RandomLoad from "./RandomLoad"
import RandomError from "./RandomError"

const API = new CocktailAPI()

function Random() {
    const [obj, setObj] = useState({})
    const [refresh, setRefresh] = useState(0)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const {id, name, cat, alc, glass, desc, img, ingr=[], meas=[]} = obj

    useEffect(() => {
        API.randomCocktail().then( o => {
            if(o.id) {
                setObj(o)
                setLoad(false)
                setError(false)
            } else {
                setLoad(false)
                setError(true)
            }
        } )
        setLoad(true)
        setError(false)
    }, [refresh])
    
    return error ? <RandomError /> :
            load ? <RandomLoad /> : 
            (
        <Card>
            <Row xs={1} md={2}>
                <Col>
                    <Card.Img variant="top" src={img} alt={name} />
                </Col>
                <Col>
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
                        <Button onClick={()=> setRefresh(refresh + 1)} variant="primary">Show new</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default Random