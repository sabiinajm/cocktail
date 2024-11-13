import { Col, Pagination, Row } from "react-bootstrap"
import Item from "./Item"
import CocktailAPI from "../provider/CocktailAPI"
import { useEffect, useState } from "react"

const API = new CocktailAPI()

function List() {
    const [cocktails, setCocktails] = useState([])
    const [letter, setLetter] = useState('A')

    useEffect(() => {
        API.byFirstLetter(letter).then(arr => setCocktails(arr))
    }, [letter])

    return (
        <div className="py-3">
            <Pagination className="d-flex flex-wrap">
                {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
                    .map(l => <Pagination.Item 
                                onClick={()=> setLetter(l)} 
                                key={l} 
                                active={l === letter}
                            >{l}</Pagination.Item>)}
            </Pagination>
            <Row xs={1} sm={2} md={3} lg={4}>
            {cocktails.map((obj, i) => <Col key={i} className="my-2"><Item obj={obj} /></Col>)}
        </Row>
        </div>
        
    )
}

export default List