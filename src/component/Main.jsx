import { Container } from "react-bootstrap"
import Random from "./Random"
import List from "./List"

function Main() {
    return (
        <main className="py-3">
            <Container>
                <Random />
                <List />
            </Container>
        </main>
    )
    }

export default Main