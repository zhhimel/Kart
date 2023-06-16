import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
    return (
        <Navbar fixed='top' bg="light" variant="light" style={{position:"sticky",top:"0"}} >
            <Container className='mx-7 my-1'>
                <div className='d-flex align-items-center'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.jpg"
                            width="30"
                            height="30"
                        />

                    </Navbar.Brand>
                    <Navbar.Brand href="#home" className=''>KART</Navbar.Brand>
                </div>

                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#categories">Categories</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default Navbars;