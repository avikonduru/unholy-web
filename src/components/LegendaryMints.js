import React, {Fragment} from 'react'

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// framer motion
import { motion } from "framer-motion";

const LegendaryMints = () => {
  return (
    <Fragment>
        <Row style={{marginBottom: 40}}>
            <span style={{fontWeight: 'bold', fontSize: 25, marginBottom: 20}}>Current Legendary Mints:</span>
            <Col xs={6}>
                <motion.div
                whileHover={{
                    scale: 1.05,
                    transition: { duration: .5 },
                }}
                >
                <Card style={{ width: '26rem', backgroundColor: '#dd02dd' }}>
                    <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                    <Card.Body>
                    <Card.Title>Legendary #1</Card.Title>
                    <Card.Text>
                        Owned By: 0x0000...0000
                    </Card.Text>
                    </Card.Body>
                </Card>
                </motion.div>
            </Col>

            <Col xs={6}>
                <Card style={{ width: '26rem', backgroundColor: '#dd02dd' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                    <Card.Title>Legendary #1</Card.Title>
                    <Card.Text>
                        Owned By: 0x0000...0000
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Fragment>
  )
}

export default LegendaryMints