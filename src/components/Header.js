import React, {Fragment} from 'react'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Fragment>
        <Navbar sticky="top" style={{backgroundColor: '#1d1f21'}}>
            <Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Button variant="outline-secondary">Connect Wallet</Button>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </Fragment>
  )
}

export default Header