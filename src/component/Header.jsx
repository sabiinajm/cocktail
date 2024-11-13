import { Container, Navbar } from "react-bootstrap"

function Header() {
    return (
        <header>
            <Navbar className="bg-warning">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    src="cocktail.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="cocktail logo"
                    />
                </Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header