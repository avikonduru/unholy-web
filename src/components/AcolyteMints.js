import React, {Fragment} from 'react'

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// framer motion
import { motion } from "framer-motion";

const AcolyteMints = () => {
  return (
    <div>
        <Row style={{marginBottom: 40}}>
            <span style={{fontWeight: 'bold', fontSize: 25, marginBottom: 20}}>Current Acolyte Mints:</span>
            <Col xs={3}>
                <Card style={{ width: '14rem', color: 'black', backgroundColor: '#d3d3d3' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                    <Card.Title>Acolyte #1</Card.Title>
                    <Card.Text>
                    Owned By: 0x0000...0000
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={3}>
                <Card style={{ width: '14rem', color: 'black', backgroundColor: '#d3d3d3' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                    <Card.Title>Acolyte #1</Card.Title>
                    <Card.Text>
                    Owned By: 0x0000...0000
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={3}>
                <Card style={{ width: '14rem', color: 'black', backgroundColor: '#d3d3d3' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                    <Card.Title>Acolyte #1</Card.Title>
                    <Card.Text>
                    Owned By: 0x0000...0000
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default AcolyteMints