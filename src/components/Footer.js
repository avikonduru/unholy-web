import React, {Fragment} from 'react'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <Fragment>
        <Navbar position="bottom" style={{backgroundColor: '#1d1f21'}}>
            <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', padding: 20}}>
                <span>Come and see</span>
            </Container>
        </Navbar>
    </Fragment>
  )
}

export default Footer